import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { COLORS } from '../theme'
import Icon from 'react-native-vector-icons/Ionicons'

const DishRow = ({ item }) => {
   return (
      <View className="mx-2 mb-3 flex-row items-center rounded-2xl bg-white p-3 shadow-lg">
         <Image
            className="h-[100px] w-[100px] rounded-xl"
            source={item.image}
         />
         <View className="flex flex-1 space-y-3">
            <View className="pl-3">
               <Text className="text-xl">{item.name}</Text>
               <Text className="text-gray-700">{item.description}</Text>
            </View>
            <View className="flex-row items-center justify-between pl-3">
               <Text className="text-lg font-bold text-gray-700">
                  ${item.price}
               </Text>
               <View className="flex-row items-center">
                  <Pressable
                     className="rounded-full p-1"
                     style={{ backgroundColor: COLORS.bgColor(1) }}>
                     <Icon name="remove" size={25} color={'white'} />
                  </Pressable>
                  <Text className="px-3 font-bold">{2}</Text>
                  <Pressable
                     className="rounded-full p-1"
                     style={{ backgroundColor: COLORS.bgColor(1) }}>
                     <Icon name="add" size={25} color={'white'} />
                  </Pressable>
               </View>
            </View>
         </View>
      </View>
   )
}

export default DishRow
