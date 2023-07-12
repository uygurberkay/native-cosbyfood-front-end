import { View, Text, TouchableWithoutFeedback, Image, ScrollView} from 'react-native'
import React from 'react'

const RestaurantCard = ({item}) => {
    return (
        <TouchableWithoutFeedback>
            <View className="mr-6 bg-white rounded-3xl shadow-lg">
                <Image 
                    className="h-36 w-64 rounded-t-3xl" 
                    source={item.image}
                />
                <View className="px-3 pb-4 space-y-2 ">
                    <Text className="text-lg font-bold pt-2">
                        {item.name}
                    </Text>
                    <View className="flex-row items-center space-x-1">
                        {Array.from({ length: item.stars }, (_, index) => (
                            <Image
                            key={index}
                            source={require('../assets/images/fullStar.png')}
                            className="h-4 w-4"
                            />
                        ))}
                        <Text className="text-green-700">
                            {/* doesn't show for now */}
                            {/* {item.stars} */}
                        </Text>
                        <Text className="text-gray-700">
                            ({item.reviews} review) .
                            <Text className="font-semibold">
                                {item.category}
                            </Text>
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default RestaurantCard