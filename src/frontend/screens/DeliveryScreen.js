import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { featured } from '../../../constants'
import { useNavigation } from '@react-navigation/native'
import MapView from 'react-native-maps'
import { Marker } from 'react-native-maps'
import { COLORS } from '../theme'
import Icon from 'react-native-vector-icons/Ionicons'
import { useSelector } from 'react-redux'
import { selectRestaurant } from '../slices/RestaurantSlice'

const DeliveryScreen = () => {
   const restaurant = useSelector(selectRestaurant)
   const navigation = useNavigation()
   return (
      <View className="flex-1">
         {/* Map View */}
         <MapView
            initialRegion={{
               latitude: restaurant.lat,
               longitude: restaurant.lng,
               latitudeDelta: 0.01,
               longitudeDelta: 0.01,
            }}
            className="flex-1"
            mapType="standard">
            <Marker
               coordinate={{
                  latitude: restaurant.lat,
                  longitude: restaurant.lng,
               }}
               title={restaurant.name}
               description={restaurant.description}
               pinColor={COLORS.bgColor(1)}
            />
         </MapView>

         <View className="relative -mt-12 rounded-t-3xl bg-white">
            <Pressable className="absolute right-4 top-2"></Pressable>
            <View className="flex-row justify-between px-5 pt-10">
               <View>
                  <Text className="text-lg font-semibold text-gray-700">
                     Estimated Arrival
                  </Text>
                  <Text className="text-3xl font-extrabold text-gray-700">
                     20-30 Minutes
                  </Text>
                  <Text className="mt-2 font-semibold text-gray-700">
                     Your Order is on its way
                  </Text>
               </View>
               <Image
                  className="h-24 w-24"
                  source={require('../../../assets/images/bikeGuy2.gif')}
               />
            </View>

            <View
               style={{ backgroundColor: COLORS.bgColor(0.8) }}
               className="mx-2 my-5 flex-row items-center justify-between rounded-full p-2">
               <View
                  style={{ backgroundColor: 'rgba(255,255,255,0.4)' }}
                  className="rounded-full p-1">
                  <Image
                     style={{ backgroundColor: 'rgba(255,255,255,0.4)' }}
                     className="h-16 w-16 rounded-full"
                     source={require('../../../assets/images/bikeGuy.png')}
                  />
               </View>

               <View className="ml-3 flex-1">
                  <Text className="text-lg font-bold text-white">
                     Syed Noman
                  </Text>
                  <Text className="font-semibold text-white">Your Rider</Text>
               </View>
               <View className="mr-3 flex-row items-center space-x-3">
                  <Pressable className="rounded-full bg-white p-2">
                     <Icon name="call" size={25} color={COLORS.bgColor(1)} />
                  </Pressable>

                  <Pressable
                     onPress={() => navigation.navigate('Home')}
                     className="rounded-full bg-white p-2">
                     <Icon name="close" size={25} color={'red'} />
                  </Pressable>
               </View>
            </View>
         </View>
      </View>
   )
}

export default DeliveryScreen
