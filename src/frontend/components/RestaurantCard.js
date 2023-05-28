import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { COLORS } from '../theme'
import { useNavigation } from '@react-navigation/native'

const RestaurantCard = ({ item }) => {
   const navigation = useNavigation()
   return (
      <Pressable onPress={() => navigation.navigate('Restaurant', { ...item })}>
         <View
            style={{ shadowColor: COLORS.bgColor(0.1), shadowRadius: 5 }}
            className="mr-6 rounded-2xl bg-white shadow-lg">
            <Image className="h-36 w-64 rounded-t-2xl" source={item.image} />
            <View className="space-y-2 px-3 pb-4">
               <Text className="pt-2 text-lg font-bold">{item.name}</Text>
               <View className="flex-row items-center space-x-1">
                  <Image
                     source={require('../../../assets/images/fullStar.png')}
                     className="h-4 w-4"
                  />
                  <Text className="flex-row">
                     <Text className="text-green-700">{item.stars} </Text>
                     <Text className="text-gray-700">
                        ({item.reviews} Reviews) ·{' '}
                        <Text className="font-semibold">{item.category}</Text>
                     </Text>
                  </Text>
               </View>
               <View className="flex-row items-center space-x-1">
                  <Icon name="location-outline" size={15} color={'gray'} />
                  <Text className="text-xs text-gray-700">
                     Nearby · {item.address}
                  </Text>
               </View>
            </View>
         </View>
      </Pressable>
   )
}

export default RestaurantCard
