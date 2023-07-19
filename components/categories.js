import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import {categories} from '../constants'
import { useEffect } from 'react';
import { getCategories } from '../api';
import 'react-native-url-polyfill/auto';
import { urlFor } from '../sanity';

const Categories = () => {
    const [activeCategory, setActiveCategory] = useState(null);
    let [categories, setCategories] = useState([])
    

    useEffect(() => {
        getCategories().then(data=>{
            setCategories(data);
            })
    }, [])
    const imageUrl = (source) => {
        return builder.image(source)
    }
    return (
        <View className="mt-4">
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className="overflow-visible"
                contentContainerStyle={{
                    paddingHorizontal: 15
                }}
            >
                {
                    categories?.map(category=>{
                    let isActive = category._id==activeCategory;
                    let btnClass = isActive? ' bg-gray-600': ' bg-gray-200';
                    let textClass = isActive? ' font-semibold text-gray-800': ' text-gray-500';
                    return(
                        <View key={category._id} className="flex justify-center items-center mr-6">
                        <TouchableOpacity 
                            onPress={()=> setActiveCategory(category._id)} 
                            className={"p-1 rounded-full shadow"+ btnClass}>
                            {
                                category.image && (
                            <Image style={{width: 45, height: 45}} source={{
                                uri: urlFor(category.image).width(200).url(),
                            }} 
                            />
                                )
                            }
                        </TouchableOpacity>
                        <Text className={"text-sm "+textClass}>{category.name}</Text>
                        </View> 
                    )
                    })
                }
                
            </ScrollView>
        </View>
    )
}

export default Categories
