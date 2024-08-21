// /navigation/index.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen';
import EventsScreen from './src/screens/EventsScreen';
import MessagesScreen from './src/screens/MessagesScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function AuthStack() {
    return (
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
    );
}

function MainTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Events" component={EventsScreen} />
            <Tab.Screen name="Messages" component={MessagesScreen} />
        </Tab.Navigator>
    );
}

export default function Navigation() {
    return (
        <Stack.Navigator initialRouteName="Auth">
            <Stack.Screen name="Auth" component={AuthStack} />
            <Stack.Screen name="Main" component={MainTabs} />
        </Stack.Navigator>
    );
}
