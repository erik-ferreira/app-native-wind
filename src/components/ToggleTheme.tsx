import colors from "tailwindcss/colors";
import { useColorScheme } from "nativewind";
import { View, Text, Switch } from "react-native";

export function ToggleTheme() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <View className="flex-row items-center justify-center gap-4">
      <Text className="text-yellow-500">Dark</Text>

      <Switch
        trackColor={{ true: colors.blue[300], false: colors.yellow[500] }}
        thumbColor={
          colorScheme === "light" ? colors.blue[900] : colors.yellow[900]
        }
        value={colorScheme === "light"}
        onValueChange={toggleColorScheme}
      />

      <Text className="text-blue-500">Light</Text>
    </View>
  );
}
