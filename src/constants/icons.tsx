import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export const Icon = ({ name, color, size }: any) => {
    return <MaterialCommunityIcons name={name} color={color} size={size}/>;
};