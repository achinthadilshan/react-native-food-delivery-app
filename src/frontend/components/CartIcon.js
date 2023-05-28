import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { COLORS } from '../theme'

const CartIcon = () => {
   return (
      <View className="absolute bottom-5 z-50 w-full">
         <Pressable
            style={{ backgroundColor: COLORS.bgColor(1) }}
            className="mx-5 flex-row items-center justify-between rounded-full p-4 py-3 shadow-lg">
            <View className="rounded-full bg-white/[0.3] p-2 px-4 backdrop-opacity-10">
               <Text className="text-lg font-extrabold text-white">3</Text>
            </View>
            <Text className="flex-1 text-center text-lg font-extrabold text-white">
               View Cart
            </Text>
            <Text className="text-lg font-extrabold text-white">${23}</Text>
         </Pressable>
      </View>
   )
}

export default CartIcon
