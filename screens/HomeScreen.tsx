// Screen which shows all users and their last messages by rendering ChatRoomItem

import * as React from 'react';
import { useNavigation , useRoute } from '@react-navigation/core';
import { Text, Image, View, StyleSheet, FlatList} from 'react-native';
import ChatRoomItem from '../components/ChatRoomItem';
import ChatRoomQuery from '../components/ChatRoomQuery';
//import ChatRoomData from '../assets/dummy-data/ChatRoom';







export default function HomeScreen() {

  
  const route = useRoute();
  const navigation = useNavigation();
  const chatRoomsData2 = ChatRoomQuery()
  //const chatRoomsData = ChatRoomData

  // console.log(chatRoomsData2) // Run a check on the data

  navigation.setOptions({title: "Test"})
  return (
    <View style={styles.page}>
      <FlatList 
        data = {chatRoomsData2}
        renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}


      />
      
    </View>
  );
}

const styles = StyleSheet.create({

  page:{

  },

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
