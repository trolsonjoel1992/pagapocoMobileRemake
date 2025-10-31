# SessionContext - Guía de Uso para Paginación

## Descripción

El `SessionContext` genera un UUID único que persiste en AsyncStorage y se mantiene durante toda la vida de la aplicación, independientemente de si el usuario está logueado o no. Este ID es útil para:

- Implementar paginación en el backend
- Tracking de sesión anónima
- Analytics y métricas

## Estructura

```typescript
type SessionContextType = {
  sessionId: string | null; // UUID único de la sesión
  loading: boolean; // true mientras carga de AsyncStorage
};
```

## Uso Básico

### 1. Importar el hook

```typescript
import { useSession } from '@/src/context/SessionContext';
```

### 2. Usar el sessionId en un componente

```typescript
const MyComponent = () => {
  const { sessionId, loading } = useSession();

  if (loading) {
    return <ActivityIndicator />;
  }

  console.log('Session ID:', sessionId);
  // sessionId será algo como: "a3b5c7d9-1234-4abc-8def-123456789abc"

  return <View>...</View>;
};
```

## Ejemplo: Paginación en Home

### Opción 1: Fetch con sessionId en query params

```typescript
import { useSession } from '@/src/context/SessionContext';
import { useState, useEffect } from 'react';

const Home = () => {
  const { sessionId, loading } = useSession();
  const [publications, setPublications] = useState([]);
  const [page, setPage] = useState(1);

  const fetchPublications = async (pageNum: number) => {
    if (!sessionId) return;

    try {
      const response = await fetch(
        `https://your-api.com/publications?page=${pageNum}&sessionId=${sessionId}&limit=10`
      );
      const data = await response.json();
      setPublications(prev => [...prev, ...data.publications]);
    } catch (error) {
      console.error('Error fetching publications:', error);
    }
  };

  useEffect(() => {
    if (sessionId) {
      fetchPublications(page);
    }
  }, [sessionId, page]);

  const loadMore = () => setPage(prev => prev + 1);

  if (loading) return <LoadingScreen />;

  return (
    <FlatList
      data={publications}
      onEndReached={loadMore}
      onEndReachedThreshold={0.5}
      // ...
    />
  );
};
```

### Opción 2: Fetch con sessionId en headers

```typescript
const fetchPublications = async (pageNum: number) => {
  if (!sessionId) return;

  try {
    const response = await fetch(
      `https://your-api.com/publications?page=${pageNum}&limit=10`,
      {
        headers: {
          'X-Session-Id': sessionId,
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching publications:', error);
  }
};
```

### Opción 3: POST con sessionId en body

```typescript
const fetchPublications = async (pageNum: number) => {
  if (!sessionId) return;

  try {
    const response = await fetch('https://your-api.com/publications/paginate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sessionId,
        page: pageNum,
        limit: 10,
        filters: {
          category: 'car',
          priceMax: 5000000,
        },
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching publications:', error);
  }
};
```

## Ejemplo: Backend (Firebase Cloud Function)

### Endpoint de paginación que usa sessionId

```typescript
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

export const getPublications = functions.https.onRequest(async (req, res) => {
  const { sessionId, page = 1, limit = 10 } = req.body;

  if (!sessionId) {
    return res.status(400).json({ error: 'sessionId is required' });
  }

  try {
    // Usar sessionId para tracking o cache
    const cacheKey = `session_${sessionId}_page_${page}`;

    // Consultar Firestore
    const publicationsRef = admin.firestore().collection('publications');
    const snapshot = await publicationsRef
      .orderBy('createdAt', 'desc')
      .limit(limit)
      .offset((page - 1) * limit)
      .get();

    const publications = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));

    // Guardar sesión para analytics
    await admin.firestore().collection('sessions').doc(sessionId).set(
      {
        lastAccess: admin.firestore.FieldValue.serverTimestamp(),
        pageViewed: page,
      },
      { merge: true }
    );

    res.json({
      publications,
      page,
      totalPages: Math.ceil(snapshot.size / limit),
      sessionId,
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
```

## Ejemplo: Insomnia/Postman Request

### GET con query params

```
GET https://your-api.com/publications?page=1&limit=10&sessionId=a3b5c7d9-1234-4abc-8def-123456789abc
```

### POST con body

```json
POST https://your-api.com/publications/paginate
Content-Type: application/json

{
  "sessionId": "a3b5c7d9-1234-4abc-8def-123456789abc",
  "page": 1,
  "limit": 10,
  "filters": {
    "category": "car",
    "city": "Buenos Aires",
    "priceMin": 100000,
    "priceMax": 5000000
  }
}
```

### Response esperado

```json
{
  "publications": [
    {
      "id": "pub-001",
      "title": "Ford Fiesta 2015",
      "price": "3200000",
      "category": "car",
      "city": "Buenos Aires",
      "images": ["url1", "url2"]
    }
    // ... más publicaciones
  ],
  "page": 1,
  "totalPages": 15,
  "totalResults": 147,
  "sessionId": "a3b5c7d9-1234-4abc-8def-123456789abc"
}
```

## Ventajas de usar sessionId para paginación

1. **Tracking sin autenticación**: Puedes trackear el comportamiento de usuarios no logueados
2. **Cache inteligente**: El backend puede cachear resultados por sesión
3. **Continuidad**: Si el usuario cierra la app y vuelve, mantiene el mismo sessionId
4. **Analytics**: Puedes medir engagement, páginas vistas, etc.
5. **Rate limiting**: Puedes limitar requests por sessionId

## Notas importantes

- El `sessionId` persiste en AsyncStorage con la key `'sessionId'`
- Se genera automáticamente al iniciar la app si no existe
- Es independiente del estado de autenticación (login/logout)
- No expira (a menos que lo borres manualmente)
- Formato: UUID v4 estándar (xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx)

## Limpiar sessionId (si es necesario)

```typescript
import AsyncStorage from '@react-native-async-storage/async-storage';

// Borrar sessionId actual
await AsyncStorage.removeItem('sessionId');

// La próxima vez que se abra la app, se generará uno nuevo
```
