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
            <BottomTab.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
            <BottomTab.Screen name="Library" component={LibraryScreen} options={{headerShown:false}}/>
            <BottomTab.Screen name="Wish List" component={WishListScreen} options={{headerShown:false}} />
            <BottomTab.Screen name="Friends" component={FriendsScreen} options={{headerShown:false}} />
        </BottomTab.Navigator>
    )}

export default AppNavigator

