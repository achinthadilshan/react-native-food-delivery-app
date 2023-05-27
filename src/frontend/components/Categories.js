import { View, Text, ScrollView, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import { categories } from '../../../constants/index'

const Categories = () => {
   const [activeCategory, setActiveCategory] = useState(null)
   return (
      <View className="mt-4">
         <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="overflow-visible"
            contentContainerStyle={{ paddingHorizontal: 15 }}>
            {categories.map((category, index) => {
               let isActive = category.id == activeCategory
               let btnClass = isActive ? 'bg-gray-600' : 'bg-gray-200'
               let textClass = isActive
                  ? 'font-semibold text-gray-800'
                  : 'text-gray-500'
               return (
                  <View
                     key={index}
                     className="mr-6 flex items-center justify-center">
                     <Pressable
                        onPress={() => setActiveCategory(category.id)}
                        className={`rounded-full bg-gray-200 p-1 shadow ${btnClass}`}>
                        <Image
                           style={{ width: 45, height: 45 }}
                           source={category.image}
                        />
                     </Pressable>
                     <Text className={`text-sm ${textClass}`}>
                        {category.name}
                     </Text>
                  </View>
               )
            })}
         </ScrollView>
      </View>
   )
}

export default Categories
