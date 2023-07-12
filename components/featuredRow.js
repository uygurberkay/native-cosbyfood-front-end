import { View, Text } from 'react-native'
import React from 'react'

const FeaturedRow = ({title, restaurants, description}) => {
    return (
        <View>
            <View
                className="flex-row justify-between items-center px-4"
            >
                <View>
                    <Text className="font-bold text-lg">
                        {title}
                    </Text>
                </View>

            </View>
        </View>
    )
}

export default FeaturedRow