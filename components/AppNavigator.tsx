import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './HomeScreen';
import LibraryScreen from './LibraryScreen';
import WishListScreen from './WishListScreen';
import FriendsScreen from './FriendsScreen';
import ProfileScreen from './ProfileScreen';
import ExploreScreen from './ExploreScreen';
const BottomTab = createBottomTabNavigator()

const AppNavigator = () => {
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
            <BottomTab.Screen name="Library" component={LibraryScreen} options={{headerShown:false}}/>
            <BottomTab.Screen name="Wish List" component={WishListScreen} options={{headerShown:false}} />
            <BottomTab.Screen name="Friends" component={FriendsScreen} options={{headerShown:false}} />
            <BottomTab.Screen name="Profile" component={ProfileScreen} options={{headerShown:false, tabBarButton: () => null}}  />
            <BottomTab.Screen name="Explore" component={ExploreScreen} options={{headerShown:false, tabBarButton: () => null}}  />
        </BottomTab.Navigator>
    )}

export default AppNavigator

