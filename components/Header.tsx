import { Header } from '@react-navigation/elements';
import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

const AppHeader = () => {

const handlePress = () => {
    navigation.navigate('profileScreen')
}

    return (
        <>
        <Header title="App"/>
        <Pressable onPress={handlePress}><Text>Profile</Text></Pressable>
        </>
    //    <View>
    //     <Text>
    //         Our cool app
    //     </Text>
    //     <Pressable title="click me"/>
    //    </View>
    );
}

export default AppHeader