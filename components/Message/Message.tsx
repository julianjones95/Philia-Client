import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

const blue = '#3777f0'
const grey = 'lightgrey'
const myID = 'u1';




const Message = ({message} : {message:any} ) => {

    const isMe = message.user.id == myID

        return (
            <View style={[
                styles.container, {
                    backgroundColor: isMe? blue: grey,
                    marginLeft: isMe ? 'auto' : 10
                    }]}>
                <Text style={{color: isMe? 'white' : 'black'}}> {message.content }</Text>
            </View>
        )


}

const styles = StyleSheet.create({
    
    container: {
        padding: 10,
        margin: 10,
        borderRadius: 10,
        maxWidth: '70%',
        
        
    },

    text: {
        color: 'white',
    }

});

export default Message