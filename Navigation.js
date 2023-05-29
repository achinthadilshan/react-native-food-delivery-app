import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './src/frontend/screens/HomeScreen'
import RestaurantScreen from './src/frontend/screens/RestaurantScreen'
import CartScreen from './src/frontend/screens/CartScreen'

const Stack = createNativeStackNavigator()

const Navigation = () => {
   return (
      <NavigationContainer>
         <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Restaurant" component={RestaurantScreen} />
            <Stack.Screen
               name="Cart"
               options={{ presentation: 'modal' }}
               component={CartScreen}
            />
         </Stack.Navigator>
      </NavigationContainer>
   )
}

export default Navigation
