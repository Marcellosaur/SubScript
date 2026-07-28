import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { Link } from 'expo-router'

const SubscriptionDetails = () => {
    const { id } = useLocalSearchParams()
  return (
    <View>
      <Text>SubscriptionDetails: {id as string}</Text>
      <Link href="/">Back to Subscriptions</Link>
    </View>
  )
}

export default SubscriptionDetails