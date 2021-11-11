import React , {useState, useEffect} from 'react';
import { TextInput, Platform, Text, View, StyleSheet, Pressable} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/core';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import LoginQuery from '../components/LoginQuery';
import * as Location from 'expo-location';
//import ChatRoomData from '../assets/dummy-data/ChatRoom';







export default function App() {

  const[password, setPassword] = useState('');
  const[username, setUserName] = useState('');
  const navigation = useNavigation();

  //const loginData = LoginQuery(username)
  //console.log(loginData);



  const onPress = () => {

    navigation.navigate('Home'); // Takes user to the home screen

  }
  

 
  
  
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
  
    useEffect(() => {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
  
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      })();
    }, []);
  
    let latitude = 'Latitude Waiting..';
    let longitude = 'Longitude Waiting'
    if (errorMsg) {
      latitude = errorMsg;
    } else if (location) {
      latitude = JSON.stringify(location.coords.latitude);
      longitude = JSON.stringify(location.coords.longitude);
    }
  
    

  return (
    <View style={styles.page}>
            

  
        
      <View >
        <Text >({ latitude} ,{ longitude})</Text> 
       
      </View>
      

      <Pressable style={styles.buttonContainer} onPress={onPress} >
          
          <Text style={styles.buttonFont} > Enter Chatroom
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

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
  },


  buttonContainer:
  {
      marginTop: 550,
      width: "50%",
      color: "white",
      height: 50,
      backgroundColor: '#3777f0',
      alignItems: 'center',
      borderRadius: 50,
      justifyContent: 'center'
      


  },

});
