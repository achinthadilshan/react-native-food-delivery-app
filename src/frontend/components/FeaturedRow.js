import { View, Text, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { COLORS } from '../theme'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({ title, restaurants, description }) => {
   return (
      <View>
         <View className="flex-row items-center justify-between px-4">
            <View>
               <Text className="text-lg font-bold">{title}</Text>
               <Text className="text-xs text-gray-500">{description}</Text>
            </View>
            <Pressable>
               <Text style={{ color: COLORS.text }} className="font-semibold">
                  See All
               </Text>
            </Pressable>
         </View>
         <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 15 }}
            className="overflow-visible py-5">
            {restaurants.map((restaurant, index) => {
               return <RestaurantCard key={index} item={restaurant} />
            })}
         </ScrollView>
      </View>
   )
}

export default FeaturedRow
