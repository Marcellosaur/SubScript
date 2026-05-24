import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Sub Script
      </Text>
      <Link href="/(auth)/sign-in" className="text-blue-500 ">Sign In</Link>
      <Link href="/(tabs)/sign-up" className="text-blue-500 ">Sign Up</Link>
    </View>
  );
}
