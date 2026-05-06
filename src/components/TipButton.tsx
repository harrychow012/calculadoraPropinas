import * as Haptics from "expo-haptics";
import { Text, TouchableOpacity } from "react-native";
export const TipButton = ({
  value,
  selected,
  onPress,
}: {
  value: number;
  selected: boolean;
  onPress: () => void;
}) => {
  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    onPress();
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        flex: 1,
        margin: 5,
        backgroundColor: selected ? "#4caf50" : "#fff",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>{value}%</Text>
    </TouchableOpacity>
  );
};
