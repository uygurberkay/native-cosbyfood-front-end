import { View, Text, SafeAreaView, TextInput, Button, FlatList } from 'react-native'
import React , {useState} from 'react'
import { StatusBar } from 'expo-status-bar'

const CommentScreen = () => {
    const [comment, setComment] = useState('')
    const [commentsList, setCommentsList] = useState([]);

    const handleAddComment = () => {
        if (comment.trim()) {
        setCommentsList(prevComments => [...prevComments, comment]);
        setComment('');
        }
    };

    return (
        <SafeAreaView>
            <View className="flex-1 p-4 absolute pt-10 items-center w-full" >
                <Text className="font-medium "
                style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 , color: 'black'}}>
                    Comments
                </Text>

                <FlatList
                    className="flex flex-start"
                    data={commentsList}
                    renderItem={({ item }) => (
                    <View style={{ marginBottom: 8 }}>
                        <Text>{item}</Text>
                    </View>
                    )}
                    keyExtractor={(_, index) => index.toString()}
                />

                <TextInput
                    className="font-light bg-gray-200 mb-4 p-6 pt-10 rounded-full mt-5"
                    placeholder="Add a comment"
                    value={comment}
                    onChangeText={text => setComment(text)}
                />

                <Button 
                    color={'black'}
                    title="Add Comment"
                    onPress={handleAddComment} 
                    className=""
                />
                </View>
        </SafeAreaView>
    )
}

export default CommentScreen
