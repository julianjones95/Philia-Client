// Chat Screen which displays chat conversations

import React from 'react';
import {Text, SafeAreaView,StyleSheet, FlatList} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/core';
import Message from '../components/Message';
import chatRoomData from '../assets/dummy-data/Chats'
import MessageInput from '../components/MessageInput';
import ChatRoomQuery from '../components/ChatRoomQuery';


export default function ChatRoomScreen(){
    const route = useRoute();
    const navigation = useNavigation();

 //   console.warn(route.params?.id);  //Pulls this from ChatRoomItem.tsx


    navigation.setOptions({title: chatRoomData.users[1].name})

 //   console.warn(route.params)
    const chatRoomsData2 = ChatRoomQuery()
    console.log(chatRoomsData2)

    return (
        <SafeAreaView style={styles.page}>
            <FlatList
            data={chatRoomData.messages}
            renderItem={({item})=><Message message={item}/>}
            
            />

            <MessageInput />
        </SafeAreaView>

        
    )
}

const styles = StyleSheet.create({

    page:{

        backgroundColor: 'white',
        flex: 1,
    }

})