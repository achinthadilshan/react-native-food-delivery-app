import { View, Text, Pressable, Image, ScrollView } from 'react-native'
import React from 'react'
import { featured } from '../../../constants'
import Icon from 'react-native-vector-icons/Ionicons'
import { COLORS } from '../theme'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectRestaurant } from '../slices/RestaurantSlice'

const CartScreen = () => {
   const navigation = useNavigation()
   const restaurant = useSelector(selectRestaurant)
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
         </View>

         {/* Delivery Time */}
         <View
            style={{ backgroundColor: COLORS.bgColor(0.2) }}
            className=" flex-row items-center px-4">
            <Image
               source={require('../../../assets/images/bikeGuy.png')}
               className="h-20 w-20 rounded-full"
            />
            <Text className="mt-4 flex-1">Delivery in 20-30 min</Text>
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
            {restaurant.dishes.map((dish, index) => {
               return (
                  <View
                     key={index}
                     className="mx-2 mb-3 flex-row items-center space-x-2 rounded-2xl bg-white px-4 py-2 shadow">
                     <Text className="font-bold" style={{ color: COLORS.text }}>
                        2x
                     </Text>
                     <Image
                        className="h-14 w-14 rounded-full"
                        source={dish.image}
                     />
                     <Text className="flex-1 font-bold text-gray-700">
                        {dish.name}
                     </Text>
                     <Text className="text-base font-semibold">
                        ${dish.price}
                     </Text>
                     <Pressable
                        className="rounded-full p-1"
                        style={{
                           backgroundColor: COLORS.bgColor(1),
                        }}>
                        <Icon name="remove" size={20} color={'white'} />
                     </Pressable>
                  </View>
               )
            })}
         </ScrollView>

         {/* total */}
         <View
            style={{ backgroundColor: COLORS.bgColor(0.2) }}
            className=" space-y-4 rounded-t-3xl p-6 px-8">
            <View className="flex-row justify-between">
               <Text className="text-gray-700">Subtotal</Text>
               <Text className="text-gray-700">$20</Text>
            </View>
            <View className="flex-row justify-between">
               <Text className="text-gray-700">Delivery Fee</Text>
               <Text className="text-gray-700">$2</Text>
            </View>
            <View className="flex-row justify-between">
               <Text className="font-extrabold">Order Total</Text>
               <Text className="font-extrabold">$30</Text>
            </View>
            <View>
               <Pressable
                  style={{ backgroundColor: COLORS.bgColor(1) }}
                  onPress={() => navigation.navigate('OrderPreparing')}
                  className="rounded-full p-3">
                  <Text className="text-center text-lg font-bold text-white">
                     Place Order
                  </Text>
               </Pressable>
            </View>
         </View>
      </View>
   )
}

export default CartScreen
