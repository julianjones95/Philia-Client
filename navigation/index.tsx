/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */

import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { View, Text, ColorSchemeName, Pressable } from 'react-native';


import NotFoundScreen from '../screens/NotFoundScreen';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';


export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();


function RootNavigator() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Login" component={LoginScreen}   />
      <Stack.Screen name="Home" component={HomeScreen} options ={{ headerTitle: "My Chats"}}  />
      <Stack.Screen name="ChatRoom" component={ChatRoomScreen} options ={{ headerTitle: ChatRoomHeader}} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} /> 
    </Stack.Navigator>
  );
}

const ChatRoomHeader = (props) => {

  return (
    <View>
      <Text>{props.children}</Text>
    </View>
  )
}

