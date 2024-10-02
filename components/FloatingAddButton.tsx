import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FAB } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";


const FloatingAddButton = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.floatingButton}>
            <FAB icon={{name: "add", color: "white"}} color="green" size="large" visible={true} onPress={() => navigation.navigate("Explore")}/>
        </View>
    )
}

const styles = StyleSheet.create({
    floatingButton: {
        position: 'absolute',
        bottom: 20,
        right: 15,
    }
})

export default FloatingAddButton