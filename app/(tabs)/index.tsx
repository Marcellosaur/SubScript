import "@/global.css"
import { Text, View } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { styled } from "nativewind"
const SafeAreaView = styled(RNSafeAreaView);

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-xl font-sans-bold">
        Welcome to Sub Script
      </Text>
      <Link href="/onboarding" className="mt-4 font-sans-bold text-white rounded bg-primary p-4">Onboarding</Link>
      <Link href="/(auth)/sign-in" className="mt-4 font-sans-bold text-white rounded bg-primary p-4">Sign In</Link>
      <Link href="/(auth)/sign-up" className="mt-4 font-sans-bold text-white rounded bg-primary p-4">Sign Up</Link>
    </SafeAreaView>
  );
}
