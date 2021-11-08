import React, { useState } from 'react';
import { useEffect } from 'react';


export default function LoginQuery(userEmail: any){
    
    
    const [LoginData, setLoginData] = useState([]);
    useEffect(() => {
      fetch('http://www.smartcall.tech:3000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
              "userLogin" : userEmail
          })
        })
        .then((response) => response.json())
        .then((json) => setLoginData(json.data.Login))
      //  console.log("the data is:")

    
        
          
      }, []);
      console.log(LoginData)
      return LoginData
    }