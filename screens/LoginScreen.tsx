import React , {useState} from 'react';
import { TextInput, Text, View, StyleSheet, Pressable} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/core';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import LoginQuery from '../components/LoginQuery';
//import ChatRoomData from '../assets/dummy-data/ChatRoom';







export default function LoginScreen() {

  const[password, setPassword] = useState('');
  const[username, setUserName] = useState('');
  const navigation = useNavigation();

  //const loginData = LoginQuery(username)
  //console.log(loginData);



  const onPress = () => {

    navigation.navigate('Map'); // Takes user to the home screen

  }
  




  return (
    <View style={styles.page}>
            
        
      <View style={styles.username} >
          <TextInput
         style={styles.input}
          value = {username}
          onChangeText = {setUserName}
          placeholder="Username . . ."
          />
      </View>

      <View style={styles.password} >
          <TextInput
          style={styles.input}
          value = {password}
          onChangeText = {setPassword}
          placeholder="Password . . ."
          />
      </View>
      
      <Pressable style={styles.buttonContainer} onPress={onPress} >
          
          <Text style={styles.buttonFont} > Login
          </Text>
    
          {LoginQuery(username)}
          
      </Pressable>
      
      

    </View>
  );
}

const styles = StyleSheet.create({

  page:{
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100
  },

  buttonFont:{
    color: 'white',
    fontSize: 20
  },

  input:{

    fontSize: 20,
    
  },

  username:
  {
      marginTop: 200,
      width: "70%",
      color: "black",
      height: 50,
      backgroundColor: 'white',
      alignItems: 'center',
      borderRadius: 5,
      justifyContent: 'center',


  },


  password:
  {
    marginTop: 50,
      width: "70%",
      color: "black",
      height: 50,
      backgroundColor: 'white',
      alignItems: 'center',
      borderRadius: 5,
      justifyContent: 'center',


  },


  buttonContainer:
  {
      marginTop: 50,
      width: "50%",
      color: "white",
      height: 50,
      backgroundColor: '#3777f0',
      alignItems: 'center',
      borderRadius: 50,
      justifyContent: 'center'
      


  },

});
