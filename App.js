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
import myVehicle from './src/myVehicle';
import Vehicle from './src/Vehicle';
import Settings from './src/settings';
import otpPage from './src/otpPage';
import Hobbies from './src/hobbies';
export default function goPool(props) {
   
   

  return (
 
    <NavigationContainer  >
      <Stack.Navigator   initialRouteName={firebase.auth().currentUser ? 'home' : 'loginPage'} screenOptions={{ headerShown: false }}  >
        {/* {console.log('entered navigator')} */}
        <Stack.Screen name="loginPage" component={loginPage} options={{animationEnabled:true,animationTypeForReplace:'pop'}} />
        <Stack.Screen name="home" component={HomePage} options={{ headerLeft: null, gestureEnabled: null,animationEnabled:true,animationTypeForReplace:'pop' }} />
        {/* <Stack.Screen name="otpPage" component={otpPage} options={{animationEnabled:true,animationTypeForReplace:'pop'}} /> */}

      </Stack.Navigator>


    </NavigationContainer>


  );
}


const Slide = () => {
  return (
    <Drawer.Navigator initialRouteName={Home} drawerType='front' >
      <Drawer.Screen name="Home" component={Home} options={{ swipeEnabled:false,drawerIcon: ({ focused }) => <Icon name="home" color='grey' style={{ fontSize: 30 }} /> }} />
      <Drawer.Screen name='Profile' component={profilenHobbies} options={{swipeEnabled:false, drawerIcon: ({ focused }) => <Icon name="person" color='grey' style={{ fontSize: 30 }} /> }} />
      <Drawer.Screen name='My Rides' component={myRides} options={{swipeEnabled:false, drawerIcon: ({ focused }) => <Icon name="calendar" color='grey' style={{ fontSize: 30 }} /> }} />
      <Drawer.Screen name='About' component={About} options={{swipeEnabled:false, drawerIcon: ({ focused }) => <Icon name="help-buoy" color='grey' style={{ fontSize: 30 }} /> }} />
      <Drawer.Screen name='My Vehicle' component={Vehicles} options={{swipeEnabled:false, drawerIcon: ({ focused }) => <Icon name="car" color='grey' style={{ fontSize: 30 }} /> }} />
      <Drawer.Screen name='Settings' component={Settings} options={{swipeEnabled:false, drawerIcon: ({ focused }) => <Icon name="settings" color='grey' style={{ fontSize: 30 }} /> }} />

    </Drawer.Navigator>

  )

}

const HomePage = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
      <Stack.Screen name='menuBar' component={Slide} options={{animationEnabled:true,animationTypeForReplace:'pop'}}></Stack.Screen>
      <Stack.Screen name='notifications' component={Notifications} options={{animationEnabled:true,animationTypeForReplace:'pop'}}></Stack.Screen>
      <Stack.Screen name='offerPoolPage' component={OfferPoolPage}options={{animationEnabled:true,animationTypeForReplace:'pop'}} ></Stack.Screen>
      {/* <Stack.Screen name='places' component={Places} options={{ headerShown: true, headerTitle: 'Search' }} ></Stack.Screen> */}

    </Stack.Navigator>
  )
}

const Vehicles=()=>{
  return(
    <Stack.Navigator initialRouteName={Vehicle} screenOptions={{ headerShown: false }}>
      <Stack.Screen name='vehicle' component={Vehicle} options={{animationEnabled:true,animationTypeForReplace:'pop'}} ></Stack.Screen>
      <Stack.Screen name='myVehicle' component={myVehicle} options={{animationEnabled:true,animationTypeForReplace:'pop'}} ></Stack.Screen>
    </Stack.Navigator>
  )
}

const profilenHobbies=()=>{
  return(
    <Stack.Navigator initialRouteName={profile} >
    <Stack.Screen name='Profile' component={profile} options={{animationEnabled:true,animationTypeForReplace:'pop',headerShown:false}} ></Stack.Screen>
    <Stack.Screen name='Hobbies' component={Hobbies} options={{animationEnabled:true,animationTypeForReplace:'pop',headerShown:true,headerTitle:'Hobbies & Skills'}}  ></Stack.Screen>
  </Stack.Navigator>
  )
}