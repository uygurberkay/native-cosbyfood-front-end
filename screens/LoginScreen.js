import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text, TextInput, Button } from 'react-native'
import { FIREBASE_AUTH } from '../FirebaseConfig'

const LoginScreen = () => {
    const [phone,setPhone] = useState()
    const [password, setPassword] = useState()
    const [loading, setLoading] = useState(false)
    const auth = FIREBASE_AUTH;

    return (
        <SafeAreaView>
            <View 
                className="flex justify-center ml-20 mr-20 space-y-2"
            >
                <Text className="flex">
                    Login
                </Text>
                <TextInput
                    className="rounded-full bg-gray-200 "
                    placeholder='Phone'
                    keyboardType='numeric'
                />
                <TextInput 
                    className="rounded-full bg-gray-200"
                    placeholder='Password'
                />
            </View>
            <View className="flex space-y-2">
                <Button 
                    title={'Login'}
                />
                <Button 
                    title={'Register'}
                />
            </View>
        </SafeAreaView>
    )
    }

export default LoginScreen