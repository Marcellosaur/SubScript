import '@/global.css';
import { Stack, SplashScreen } from 'expo-router';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'sans-Regular': require('@/assets/fonts/PlusJakartaSans-Regular.ttf'),
    'sans-Medium': require('@/assets/fonts/PlusJakartaSans-Medium.ttf'),
    'sans-SemiBold': require('@/assets/fonts/PlusJakartaSans-SemiBold.ttf'),
    'sans-Bold': require('@/assets/fonts/PlusJakartaSans-Bold.ttf'),
    'sans-ExtraBold': require('@/assets/fonts/PlusJakartaSans-ExtraBold.ttf'),
    'sans-light': require('@/assets/fonts/PlusJakartaSans-Light.ttf')
  });
  useEffect(() => {
    if (!fontsLoaded) {
      SplashScreen.preventAutoHideAsync();
    } else {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  return <Stack screenOptions={{ headerShown: false }}/>;
}
