import { View, Text, TouchableWithoutFeedback, Image, ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather";
import {themeColors} from '../theme'
import { useNavigation } from '@react-navigation/native';

const RestaurantCard = ({item}) => {
    const navigation = useNavigation()
    return (
        <TouchableWithoutFeedback
            onPress={() => {
                navigation.navigate('Restaurant', {...item})
            }}
        >
            <View
                style={{
                    shadowColor: themeColors.bgColor(0.3), 
                    shadowRadius:6
                }}
                className="mr-6 bg-white rounded-xl shadow-lg">
                <Image 
                    className="h-36 w-64 rounded-t-xl" 
                    source={item.image}
                    // source={{ uri: urlFor(imgUrl).url()}}
                />
                <View className="px-3 pb-4 space-y-2">
                    <Text className="text-lg font-bold pt-2">
                        {item.name}
                    </Text>
                    <View className="flex-row items-center space-x-1">
                        {/* Multiple stars */}
                        {/* {Array.from({ length: item.stars }, (_, index) => (
                            <Image
                            key={index}
                            source={require('../assets/images/fullStar.png')}
                            className="h-4 w-4"
                            />
                        ))} */}
                            <Text className="text-green-700">
                                {/* doesn't show for now */}
                                {/* {item.stars} */}
                            </Text>
                            <Text className="font-semibold">
                                {item.category}
                                {/* {item?.type?.name} */}
                            </Text>
                            {/* Single Stars */}
                            <Text className="text-gray-700">
                                {item.reviews} 
                            </Text>
                            <Image
                                source={require('../assets/images/fullStar.png')}
                                className="h-4 w-4"
                            />
                    </View>
                    <View className="flex-row items-center space-x-1">
                        <Icon.MapPin color="gray" width={15} height={15} />
                        <Text className="text-gray-700 text-xs"> Nearby · </Text>
                        <Text className="text-gray-700 text-xs font-semibold">{item.address}</Text>
                    </View>
                    <View className="flex-row items-center space-x-1">
                        <Icon.Clock color="gray" width={15} height={15} />
                        <Text className="text-gray-700 text-xs">{item.availableTime}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default RestaurantCard