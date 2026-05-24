import { View, Text } from 'react-native'
import React from 'react'
import { Link } from "expo-router";

const signIn = () => {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">sign-in</Text>
      <Link href="/(auth)/sign-up" className="bg-blue-600 p-4 rounded-xl items-center justify-center active:opacity-80 shadow-md ">Sign Up</Link>
      <Link href="/">home</Link>
    </View>
  )
}

export default signIn;
