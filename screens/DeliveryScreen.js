import { View, Text, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { featured } from '../constants'
import { useNavigation } from '@react-navigation/native'
import MapView, { Marker } from 'react-native-maps';
import { themeColors } from '../theme';
import * as Icon from "react-native-feather";
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../slices/restaurantSlice';
import { emptyCart } from '../slices/cartSlice';

const DeliveryScreen = () => {
    const restaurant = useSelector(selectRestaurant)
    const navigation = useNavigation()
    const dispatch = useDispatch()

    const cancelOrder = () => {
        navigation.navigate('Home')
        dispatch(emptyCart())
    }

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
                mapType='standard'
            >
                {/* Marker View */}
                <Marker
                    coordinate={{
                        latitude: restaurant.lat,
                        longitude: restaurant.lng,
                    }}
                    title={restaurant.name}
                    description={restaurant.description}
                    pinColor={themeColors.bgColor(1)}
                />
            </MapView>
                <View className="rounded-t-3xl -mt-12 bg-white relative">
                    <View className="flex-row justify-between px-5 pt-10 spacey3">
                        <View className="">
                            <Text className="text-lg text-gray-700 font-semibold">
                                Restoran Bilgileri
                            </Text>
                            <Text className="flex-row justify-between space-x-4">
                                {restaurant.availableTime}
                                <Icon.Clock width={15} height={15} stroke={`${themeColors.bgColor(0.8)}`} />
                            </Text>
                            <Text className="pt-2">
                                Rezervasyonunuz yapılmıştır.
                            </Text>
                        </View>
                        <Image 
                            source={require('../assets/images/bikeGuy2.gif')} 
                            className="w-24 h-24" 
                        />
                    </View>
                    <View 
                        className="p-2 flex-row justify-between items-center rounded-full my-5 mx-2"
                        style={{backgroundColor: themeColors.bgColor(0.8)}}
                    >

                        <View
                            style={{backgroundColor: 'rgba(255,255,255,0.4'}}
                        >
                            <Image 
                                className="h-16 w-16 rounded-full"
                                source={require('../assets/images/deliveryGuy.png')}
                            />
                        </View>
                        <View className="flex-1 ml-3">
                            <Text className="text-lg font-bold text-white">Shrek Shrekoğlu</Text>
                            <Text className="font-bold text-white">Ev Sahibi</Text>
                        </View>
                        <View className="flex-row items-center space-x-3 mr-3">
                            
                            <TouchableOpacity 
                                className="bg-white rounded-full p-2"
                                onPress={() => navigation.navigate('Comment')}
                            >
                                <Icon.MessageSquare fill={themeColors.bgColor(1)} stroke={themeColors.bgColor(1)} strokeWidth={1} />
                            </TouchableOpacity>

                            <TouchableOpacity 
                                onPress={cancelOrder} 
                                className="bg-white rounded-full p-2"
                            >
                                <Icon.X stroke={themeColors.bgColor(1)} strokeWidth={3} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            
        
        </View>
    )
}

export default DeliveryScreen