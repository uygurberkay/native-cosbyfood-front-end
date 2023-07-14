import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import {featured} from '../constants'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native';
import {StatusBar} from 'expo-status-bar'
import * as Icon from "react-native-feather";

const CartScreen = ({item}) => {
    const restaurant = featured.restaurants[0]
    const navigation = useNavigation()
    return (
        <View className="bg-white flex-1 pt-3">
            <StatusBar style="auto"/>
            {/* Back Button */}
            <View className="py-4">
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{backgroundColor: themeColors.bgColor(1)}}
                    className="absolute z-10 rounded-full p-1 shadow top-5 left-2"
                >
                    <Icon.ArrowLeft height={40} width={40} strokeWidth={3} stroke={'white'} />
                </TouchableOpacity>
                <View>
                    <Text className="text-center font-bold text-xl">Your Cart</Text>
                    <Text className="text-center text-gray-500">{restaurant.name}</Text>
                </View>
            </View>

            {/* Delivery Time */}
            <View 
                style={{backgroundColor: themeColors.bgColor(0.2)}}
                className="flex-row px-4 items-center"
            >    
                <Image 
                    source={require('../assets/images/bikeGuy.png')}
                    className="w-20 h-20 rounded-full"
                />
                <Text className="flex-1 pl-4">Deliver in 20-30 min</Text>
                <Icon.MapPin className="flex items-center mx-2" color={"gray"} width={20} height={20} />
                <TouchableOpacity>
                    <Text className="font-bold" style={{color: themeColors.text}}>Change</Text>
                </TouchableOpacity>
            </View>
            <ScrollView 
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 50
                }}
                className="bg-white pt-5"
            >
                {
                    restaurant.dishes.map((dish,index)=>{
                        return (
                            <View 
                                key={index}
                                className="flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-md"
                            >
                                <Text 
                                    className="font-bold"
                                    style={{color: themeColors.text}}
                                >
                                    2
                                </Text>
                                <Image 
                                        className=" h-14 w-14 rounded-full"
                                        source={dish.image}
                                    />
                                <Text className="flex-1 font-bold text-gray-700">{dish.name}</Text>
                                <Text className="font-semibold text-base">₺{dish.price}</Text>                              
                                <TouchableOpacity 
                                    className="p-1 rounded-full"
                                    style={{backgroundColor: themeColors.bgColor(1)}}
                                >
                                    <Icon.Minus strokeWidth={2} height={20} width={20} stroke={'white'} />
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
            </ScrollView>
            {/* Totals */}
            <View 
                style={{backgroundColor: themeColors.bgColor(0.2)}}
                className="p-3 px-8 rounded-t-3xl space-y-2"
            >   
                <View className="flex-row justify-between">
                    <Text className="text-gray-700">Ürün Toplamı</Text>
                    <Text className="text-gray-700">₺80</Text>
                </View>
                <View className="flex-row justify-between">
                    <Text className="text-gray-700">Teslimat Ücreti</Text>
                    <Text className="text-gray-700">₺10</Text>
                </View>
                <View className="flex-row justify-between">
                    <Text className="text-gray-700">Toplam</Text>
                    <Text className="text-gray-700">₺90</Text>
                </View>
                <View>
                    <TouchableOpacity
                    onPress={() => navigation.navigate('OrderPreparing')}
                        style={{backgroundColor: themeColors.bgColor(1)}}
                        className="p-3 rounded-full"
                    >
                        <Text className="text-white text-center font-bold text-lg">Sipariş Ver</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default CartScreen