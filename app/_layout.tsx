import { Slot } from "expo-router";
import { View } from "react-native";

const RootLayout = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#dbdbdb" }}>
      <Slot />
    </View>
  );
};

export default RootLayout;
