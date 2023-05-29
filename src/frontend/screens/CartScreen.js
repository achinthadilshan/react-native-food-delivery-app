import { View, Text, Pressable, Image, ScrollView } from 'react-native'
import React from 'react'
import { featured } from '../../../constants'
import Icon from 'react-native-vector-icons/Ionicons'
import { COLORS } from '../theme'
import { useNavigation } from '@react-navigation/native'

const CartScreen = () => {
   const navigation = useNavigation()
   const restaurant = featured.restaurants[0]
   return (
      <View className="flex-1 bg-white">
         <View className="relative py-4">
            {/* Back Button */}
            <Pressable
               onPress={() => navigation.goBack()}
               style={{ backgroundColor: COLORS.bgColor(1) }}
               className="absolute left-2 top-5 z-10 rounded-full p-1 shadow">
               <Icon name="arrow-back" size={28} color={'white'} />
            </Pressable>
            <View>
               <Text className="text-center text-xl font-bold">Your Cart</Text>
               <Text className="text-center text-gray-500">
                  {restaurant.name}
               </Text>
            </View>

            {/* Delivery Time */}
            <View
               style={{ backgroundColor: COLORS.bgColor(0.2) }}
               className="flex-row items-center px-4">
               <Image
                  source={require('../../../assets/images/bikeGuy.png')}
                  className="h-20 w-20 rounded-full"
               />
               <Text className="flex-1 pl-4">Delivery in 20-30 min</Text>
               <Pressable>
                  <Text className="font-bold" style={{ color: COLORS.text }}>
                     Change
                  </Text>
               </Pressable>
            </View>

            {/* Dishes */}
            <ScrollView
               showsVerticalScrollIndicator={false}
               contentContainerStyle={{ paddingBottom: 50 }}
               className="bg-white pt-5">
               {restaurant.dishes.forEach((dish, index) => {
                  return (
                     <View
                        key={index}
                        className="mx-2 mb-3 flex-row items-center space-x-2 rounded-2xl bg-white px-4 py-2 shadow">
                        <Text></Text>
                     </View>
                  )
               })}
            </ScrollView>
         </View>
      </View>
   )
}

export default CartScreen
