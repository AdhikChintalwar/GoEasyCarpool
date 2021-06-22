//dependencies imports
import 'react-native-gesture-handler';
import React from 'react';
import { Image, Modal, useState } from 'react-native';
import { StyleSheet, View, Text, Button, StatusBar,BackHandler } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-ionicons';

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

import setUp from './src/setUp';
import { firebase } from '@react-native-firebase/auth';
import loginPage from './src/loginPage';
import Home from './src/home';
import profile from './src/profile';
import Notifications from './src/notifications';
import OfferPoolPage from './src/offerPoolPage';
//import Places from './src/placeSearch';
import myRides from './src/myRides';
import About from './src/about';


export default function goPool(props) {
   
   

  return (
 
    <NavigationContainer >
{/* initialRouteName={firebase.auth().currentUser ? 'home' : 'loginPage'} */}
      <Stack.Navigator   initialRouteName={firebase.auth().currentUser ? 'home' : 'loginPage'} screenOptions={{ headerShown: false }}  >
        {/* {console.log('entered navigator')} */}
        <Stack.Screen name="loginPage" component={loginPage} />
        <Stack.Screen name="home" component={HomePage} options={{ headerLeft: null, gestureEnabled: null }} />
      </Stack.Navigator>


    </NavigationContainer>


  );
}


const Slide = () => {
  return (
    <Drawer.Navigator initialRouteName={Home} drawerType={'back'}   >
      <Drawer.Screen name="Home" component={Home} options={{ drawerIcon: ({ focused }) => <Icon name="home" color='grey' style={{ fontSize: 30 }} /> }} />
      <Drawer.Screen name='Profile' component={profile} options={{ drawerIcon: ({ focused }) => <Icon name="person" color='grey' style={{ fontSize: 30 }} /> }} />
      <Drawer.Screen name='My Rides' component={myRides} options={{ drawerIcon: ({ focused }) => <Icon name="calendar" color='grey' style={{ fontSize: 30 }} /> }} />
      <Drawer.Screen name='About' component={About} options={{ drawerIcon: ({ focused }) => <Icon name="help-buoy" color='grey' style={{ fontSize: 30 }} /> }} />

    </Drawer.Navigator>

  )

}

const HomePage = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='menuBar' component={Slide}></Stack.Screen>
      <Stack.Screen name='notifications' component={Notifications} ></Stack.Screen>
      <Stack.Screen name='offerPoolPage' component={OfferPoolPage} ></Stack.Screen>
      {/* <Stack.Screen name='places' component={Places} options={{ headerShown: true, headerTitle: 'Search' }} ></Stack.Screen> */}

    </Stack.Navigator>
  )
}
