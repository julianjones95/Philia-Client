import React, {useState} from 'react'
import {View, Text, StyleSheet, TextInput, Pressable} from 'react-native'
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons'

const MessageInput = () =>{

    const[message, setMessage] = useState('');

    const sendMessage = () => {

        console.warn("sending", message)

        setMessage('');
    }

    const onPlusClicker = () =>{

        console.log("On plus clicked")
    }

    const onPress = () => {

        if(message){

            sendMessage();
        }
        else{
            onPlusClicker();
        }

    }


    return(

        <View style={styles.root}>
            
        
            <View style={styles.inputContainer}>
                <SimpleLineIcons name="emotsmile" size={24} color={'grey'} style={styles.icon} />
                <TextInput
               // style={styles.input}
                value = {message}
                onChangeText = {setMessage}
                placeholder="Message Here ..."
                />
            </View>

            <Pressable onPress={onPress}style={styles.buttonContainer}>
                {message ? <Ionicons  name="send" size={18} color='white' /> : <Text style={styles.buttonText}>+</Text>}
                
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        padding: 5
    },

    inputContainer:{
        backgroundColor: '#f2f2f2',
        padding: 10,
        flex:1,
        marginRight: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#dedede',
        flexDirection: 'row',

    },

    icon: {
        marginRight: 10
    },

    buttonContainer:
    {
        width: 50,

        height: 50,
        backgroundColor: '#3777f0',
        borderRadius: 30,
        alignItems: 'center'


    },
    buttonText:{
        color: 'white',
        fontSize: 35
    }
})

export default MessageInput