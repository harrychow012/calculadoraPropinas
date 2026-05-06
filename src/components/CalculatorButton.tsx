import * as Haptics from "expo-haptics";
import { Text, TouchableOpacity } from "react-native";

type CalculatorButtonProps = {
  label: string;
  onPress: () => void;
};

export const CalculatorButton = ({ label, onPress }: CalculatorButtonProps) => {
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
        backgroundColor: "#fff",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 18 }}>{label}</Text>
    </TouchableOpacity>
  );
};
