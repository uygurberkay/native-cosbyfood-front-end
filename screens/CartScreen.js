import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native';
import {StatusBar} from 'expo-status-bar'
import * as Icon from "react-native-feather";
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../slices/restaurantSlice';
import { removeFromCart, selectCartItems, selectCartTotal } from '../slices/cartSlice';

const CartScreen = ({item}) => {

    const restaurant = useSelector(selectRestaurant)
    const navigation = useNavigation()
    const cartItems = useSelector(selectCartItems)
    const cartTotal = useSelector(selectCartTotal)
    const [groupedItems, setGroupedItems] = useState({})
    const reservationFee = 200;
    const dispatch = useDispatch()

    useEffect(()=> {
        const items = cartItems.reduce((group, item) => {
            if(group[item.id]){
                group[item.id].push(item)
            }else {
                group[item.id] = [item]
            }
            return group;
        },{})
        setGroupedItems(items)
    },[cartItems])
    
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
                    <Text className="text-center font-bold text-xl">Kartın</Text>
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
                <View className="flex-1 pl-4 gap-2">
                    <Text>Uygunluk Saatleri</Text>
                    <Text>{restaurant.availableTime}</Text>
                </View>
                {/* <Icon.MapPin className="flex items-center mx-2" color={"gray"} width={20} height={20} /> */}
                <TouchableOpacity>
                    <Text className="font-bold" style={{color: themeColors.text}}>Değiştir</Text>
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
                    Object.entries(groupedItems).map(([key, items])=>{
                        let dish = items[0]
                        return (
                            <View 
                                key={key}
                                className="flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-md"
                            >
                                <Text 
                                    className="font-bold"
                                    style={{color: themeColors.text}}
                                >
                                    {items.length} x
                                </Text>
                                <Image 
                                        className=" h-14 w-14 rounded-full"
                                        source={dish.image}
                                    />
                                <Text className="flex-1 font-bold text-gray-700">{dish.name}</Text>
                                <Text className="font-semibold text-base">₺{dish.price}</Text>                              
                                <TouchableOpacity 
                                    className="p-1 rounded-full"
                                    onPress={()=> dispatch(removeFromCart({id: dish.id}))}
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
                    <Text className="text-gray-700">₺{cartTotal}</Text>
                </View>
                <View className="flex-row justify-between">
                    <Text className="text-gray-700">Rezervasyon Ücreti (Girişte Geri alınır)</Text>
                    <Text className="text-gray-700">₺{reservationFee}</Text>
                </View>
                <View className="flex-row justify-between">
                    <Text className="text-gray-700">Toplam</Text>
                    <Text className="text-gray-700">₺{cartTotal+reservationFee}</Text>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('OrderPreparing')}
                        style={{backgroundColor: themeColors.bgColor(1)}}
                        className="p-3 rounded-full"
                    >
                        <Text className="text-white text-center font-bold text-lg">Rezervasyon Yap</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default CartScreen