import React, { useState } from 'react';
import { useEffect } from 'react';


export default function ChatRoomQuery(){
    
    
    const [chatRoomsData, setchatRoomsData] = useState([]);
    useEffect(() => {
      fetch('http://www.smartcall.tech:3000/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({query: "{chatroom{id,users{id,name,imageUri},lastMessage{id,content,createdAt}}}"})
        })
        .then((response) => response.json())
        .then((json) => setchatRoomsData(json.data.chatroom))
      //  console.log("the data is:")

    
        
          
      }, []);
      
      return chatRoomsData
    }