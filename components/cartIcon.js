import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectCartItems, selectCartTotal } from '../slices/cartSlice'

const CartIcon = () => {
    const navigation = useNavigation()
    const cartItem = useSelector(selectCartItems)
    const cartTotal = useSelector(selectCartTotal)
    if(!cartItem.length) return;
    return (
        <View className="absolute bottom-2 w-full z-50">
            <TouchableOpacity  
            /* navigation.navigate('writeHereNavigation.jsName') */
            onPress={() => { navigation.navigate('Cart')

            }}
                className="flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg"
                style={{backgroundColor: themeColors.bgColor(1)}}
            >
                <View 
                    className="p-2 px-4 rounded-full"
                    style={{backgroundColor: 'rgba(255,255,255,0.3'}}
                >
                    <Text className=" font-extrabold text-white text-lg">
                        {cartItem.length}
                    </Text>
                </View>
                <Text className="flex-1 text-center font-extrabold text-white text-lg">
                    Ödemeye Git
                </Text>
                <Text className="font-extrabold text-white text-lg">
                    ₺{cartTotal}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default CartIcon