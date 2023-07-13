import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation, useRoute } from '@react-navigation/native'
import * as Icon from "react-native-feather";
import { themeColors } from '../theme';
import DishRow from '../components/dishRow';

export default function RestaurantScreen() {
    const {params} = useRoute();
    const navigation = useNavigation()
    let item = params;

    return (                    
        <View>
            <ScrollView className="relative">
                <Image 
                    className="w-full h-72"
                    source={item.image}
                />
                <TouchableOpacity
                    className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow"
                    onPress={() => navigation.goBack()}
                >
                    <Icon.ArrowLeft strokeWidth={5} stroke={themeColors.bgColor(1)} />

                </TouchableOpacity>
                {/* burda sorun var */}
                <View 
                style={{
                    borderTopLeftRadius:40,
                    borderTopRightRadius: 40
                }}
                className="bg-white  pt-6"
                >
                    <View className="px-5">
                        <Text
                            className="text-3xl font-bold"
                        >
                            {item.name}
                        </Text>

                        {/* Brand container */}

                        <View className="flex-row space-x-2 my-1">
                            <View className="flex-row items-center space-x-1">
                                {Array.from({ length: item.stars }, (_, index) => (
                                    <Image
                                    key={index}
                                    source={require('../assets/images/fullStar.png')}
                                    className="h-4 w-4"
                                    />
                                ))}
                                <Text className="font-semibold">
                                    {item.category}
                                </Text>
                            </View>
                            <View className="flex-row items-center space-x-1">
                                <Icon.MapPin color="gray" width={15} height={15} />
                                <Text className="text-gray-700 text-xs"> Nearby · </Text>
                                <Text className="text-gray-700 text-xs font-semibold">{item.address}</Text>
                            </View>
                            <View className="flex-row items-center space-x-1">
                                <Icon.Package color="gray" width={15} height={15} />
                                <Text className="text-gray-700 text-xs">{item.time}</Text>
                            </View>
                        </View>
                        <Text className="text-gray-500 text-xs">
                            {item.description}
                        </Text>
                    </View>
                    <View className="pb-36 bg-white">
                        <Text className="px-4 py-4 text-2xl font-bold">Menu</Text>
                        {/* dishes */}
                        {
                            item.dishes.map((dish,index) => <DishRow item={{...dish}} key={index}/>)
                        }
                    </View>
                </View>
            </ScrollView>
            
        </View>
    )
}