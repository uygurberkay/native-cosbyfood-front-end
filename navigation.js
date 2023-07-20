import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import React from 'react'
import RestaurantScreen from './screens/RestaurantScreen';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import OrderPreparing from './screens/OrderPreparingScreen';
import DeliveryScreen from './screens/DeliveryScreen';
import CommentScreen from './screens/CommentScreen';
import LoginScreen from './screens/LoginScreen';

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
                }}>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Restaurant" component={RestaurantScreen} />
                <Stack.Screen name="Cart" options={{presentation : 'modal'}} component={CartScreen} />
                <Stack.Screen name="OrderPreparing" options={{presentation : 'fullScreenModal'}} component={OrderPreparing} />
                <Stack.Screen name="Delivery" options={{presentation : 'fullScreenModal'}} component={DeliveryScreen} />
                <Stack.Screen name="Comment" options={{presentation : 'fullScreenModal'}} component={CommentScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
} 