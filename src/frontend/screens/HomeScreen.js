import { View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
   return (
      <SafeAreaView>
         <StatusBar style="auto" />
         <Text>HomeScreen</Text>
      </SafeAreaView>
   )
}

export default HomeScreen
