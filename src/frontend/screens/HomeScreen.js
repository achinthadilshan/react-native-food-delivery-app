import { View, Text, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons'
import { COLORS } from '../theme'
import Categories from '../components/Categories'
import { featured } from '../../../constants'
import FeaturedRow from '../components/FeaturedRow'

const HomeScreen = () => {
   return (
      <SafeAreaView className="bg-white">
         <StatusBar style="auto" />
         {/* Search Bar */}
         <View className="flex-row items-center space-x-2 px-4 pb-2">
            <View className="flex-1 flex-row items-center rounded-full border border-gray-300 p-3">
               <Icon name="search-outline" size={20} color={'gray'} />
               <TextInput placeholder="Restaurants" className="ml-2 flex-1" />
               <View className="flex-row items-center space-x-1 border-0 border-l-2 border-l-gray-300 pl-2">
                  <Icon name="location-outline" size={20} color={'gray'} />
                  <Text className="text-gray-600">New York, NYC</Text>
               </View>
            </View>
            <View
               style={{ backgroundColor: COLORS.bgColor(1) }}
               className="rounded-full p-3">
               <Icon name="options" size={20} color={'white'} />
            </View>
         </View>

         {/* Categories */}
         <Categories />

         {/* Featured */}
         <View className="mt-5">
            <ScrollView showsVerticalScrollIndicator={false}>
               {[featured, featured, featured].map((item, index) => {
                  return (
                     <FeaturedRow
                        key={index}
                        title={item.title}
                        restaurants={item.restaurants}
                        description={item.description}
                     />
                  )
               })}
            </ScrollView>
         </View>
      </SafeAreaView>
   )
}

export default HomeScreen
