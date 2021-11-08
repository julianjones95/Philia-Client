// Item that belongs to HomeScreen which renders users

import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { Text, Image, View, StyleSheet, Pressable } from 'react-native';





export default function ChatRoomItem({chatRoom} : {chatRoom:any}){
    
    const user = chatRoom.users[1];
    
    const navigation = useNavigation();

    const onPress = () =>{

        navigation.navigate('ChatRoom',{ id: chatRoom.id});
    }

    return(
        <Pressable onPress={onPress} style={styles.container}>
        <Image source={{uri: user.imageUri}} style= {styles.image} />
        <View style= {styles.rightContainer} >
          <View style={styles.row}>
            <Text style={styles.name}> {user.name}</Text>
            <Text style={styles.text}> {chatRoom.lastMessage.createdAt}</Text>
          </View>
          <Text numberOfLines={1} style={styles.text}> {chatRoom.lastMessage.content}</Text>
        </View>
      </Pressable>


    );



}

export const styles = StyleSheet.create({

  
    container: {
      flexDirection: 'row',
      padding: 10
  
    },
  
    image: {
      height: 50,
      width: 50,
      borderRadius: 30,
      backgroundColor: '#fee6ff',
      marginRight: 10
    },
  
    row:{
      flexDirection: 'row',
      justifyContent: 'space-between'
  
    },
  
    name: {
      fontWeight: 'bold',
      fontSize: 18
  

    },
    
    rightContainer: {
  
  
      flex: 1,
      justifyContent: 'center'
  
    },
  
  
    text: {
      fontSize: 18,
      color: 'grey',
    },
  
  
  
  });
  