import { View, Text, ScrollView, Image, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { useNavigation, useRoute } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons'
import { COLORS } from '../theme'
import DishRow from '../components/DishRow'
import CartIcon from '../components/CartIcon'
import { useDispatch } from 'react-redux'
import { setRestaurant } from '../slices/RestaurantSlice'

const RestaurantScreen = () => {
   const { params } = useRoute()
   const navigation = useNavigation()
   let item = params
   const dispatch = useDispatch()

   useEffect(() => {
      if (item && item.id) {
         dispatch(setRestaurant({ ...item }))
      }
   }, [])
   return (
      <View>
         <StatusBar style="light" />
         <CartIcon />
         <ScrollView>
            <View className="relative">
               <Image className="h-72 w-full" source={item.image} />
               <Pressable
                  onPress={() => navigation.goBack()}
                  className="absolute left-4 top-14 rounded-full bg-gray-50 p-2 shadow">
                  <Icon name="arrow-back" size={28} color={COLORS.bgColor(1)} />
               </Pressable>
            </View>
            <View className="-mt-12 rounded-t-[40px] bg-white pt-6">
               <View className="px-5">
                  <Text className="mb-3 text-3xl font-bold">{item.name}</Text>
                  <View className="my-1 flex-row flex-wrap gap-1 space-x-1">
                     <View className="flex-row items-center space-x-1">
                        <Image
                           source={require('../../../assets/images/fullStar.png')}
                           className="h-4 w-4"
                        />
                        <Text className="flex-row">
                           <Text className="text-green-700">{item.stars} </Text>
                           <Text className="text-gray-700">
                              ({item.reviews} Reviews) ·{' '}
                              <Text className="font-semibold">
                                 {item.category}
                              </Text>
                           </Text>
                        </Text>
                     </View>
                     <View className="flex-row items-center space-x-1">
                        <Icon
                           name="location-outline"
                           size={15}
                           color={'gray'}
                        />
                        <Text className="text-xs text-gray-700">
                           Nearby · {item.address}
                        </Text>
                     </View>
                  </View>
                  <Text className="mt-2 text-gray-500">{item.description}</Text>
               </View>
            </View>
            <View className="bg-white pb-36">
               <Text className="p-4 text-2xl font-bold">Menu</Text>

               {/* Dishes */}
               {item.dishes.map((dish, index) => (
                  <DishRow item={{ ...dish }} key={index} />
               ))}
            </View>
         </ScrollView>
      </View>
   )
}

export default RestaurantScreen
