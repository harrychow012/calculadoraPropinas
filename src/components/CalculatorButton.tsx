import * as Haptics from "expo-haptics";
import { Text, TouchableOpacity } from "react-native";
import { globalStyles } from "../theme/globalStyles";

type CalculatorButtonProps = {
  label: string;
  onPress: () => void;
};

export const CalculatorButton = ({ label, onPress }: CalculatorButtonProps) => {
  const handlePress = () => {
    if (label === "C") {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
    } else if (label === "del") {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    } else {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }

    onPress();
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[
        globalStyles.button,
        label === "C" && globalStyles.buttonDanger,
        label === "del" && globalStyles.buttonSecondary,
      ]}
    >
      <Text style={globalStyles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};
