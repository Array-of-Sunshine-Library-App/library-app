import React from 'react';
import { Text, View, StyleSheet, ViewComponent, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './HomeScreen';
import LibraryScreen from './LibraryScreen';
import WishListScreen from './WishListScreen';
import FriendsScreen from './FriendsScreen';
import AppHeader from './Header';
const BottomTab = createBottomTabNavigator()

const AppNavigator = () => {
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen name="Home" component={HomeScreen} options={{header:() => <AppHeader />}} />
            <BottomTab.Screen name="Library" component={LibraryScreen} options={{header:() => <AppHeader />}} />
            <BottomTab.Screen name="Wish List" component={WishListScreen} options={{header:() => <AppHeader />}} />
            <BottomTab.Screen name="Friends" component={FriendsScreen} options={{header:() => <AppHeader />}}/>
        </BottomTab.Navigator>
    )}

export default AppNavigator

