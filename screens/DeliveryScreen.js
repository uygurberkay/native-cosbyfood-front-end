import { View, Text } from 'react-native'
import React from 'react'
import { featured } from '../constants'
import { useNavigation } from '@react-navigation/native'
import MapView from 'react-native-maps';
import { Marker } from 'react-native-svg';
import { themeColors } from '../theme';

const DeliveryScreen = () => {
    const restaurant = featured.restaurants[0]
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
                mapType='standard'
            >
                <Marker 
                    coordinate={{
                        latitude: restaurant.lat,
                        longitude: restaurant.lng,
                    }}
                    title={restaurant.name}
                    description={restaurant.description}
                    pinColor={themeColors.bgColor}
                />
            </MapView>
                
            
        
        </View>
    )
}

export default DeliveryScreen