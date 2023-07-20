import React, { useState } from 'react';
import { StyleSheet, TextInput, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { FIREBASE_AUTH } from '../FirebaseConfig';
import { Button } from 'react-native-elements';

const LoginScreen = () => {
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const auth = FIREBASE_AUTH;

    return (
        <SafeAreaView>
            <View className="flex align-center justify-center pt-3 bg-inherit space-y-3">
                <View
                    className="flex items-center w-full space-y-3"
                >
                    <TextInput
                        className="rounded-full border border-gray-300"
                        placeholder='Phone Number'
                        keyboardType='numeric'
                        onChangeText={(id) => setPhone(id)}
                        value={phone}
                    />
                    <TextInput  
                        className="rounded-full border border-gray-300"
                        onChangeText={(number) => setPhone(number)}
                        autoCapitalize='none'
                        value={password}
                        secureTextEntry={true}
                        placeholder="Password"
                    />
                </View>
                <View className="flex justify-between space-y-3 items-center">
                    <Button
                        className="rounded-full border py-3 border-gray-300 "
                        title={'Login'}
                    
                    />
                    <Button
                        className="rounded-full border py-3 border-gray-300 "
                        title={'Gmail'}
                        
                    />
                </View>
            </View>
        </SafeAreaView>
    );
    };


export default LoginScreen;