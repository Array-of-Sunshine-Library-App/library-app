
import { Text, View, StyleSheet, SafeAreaView, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AppHeader = () => {

const navigation = useNavigation();


    return (
        <SafeAreaView>
        <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>App</Text>
        <Pressable style={styles.profilePressable} onPress={()=> navigation.navigate('ProfileScreen')}>
            <Text style={styles.pressText}>Profile</Text>
        </Pressable>
        </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    headerContainer : { 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        backgroundColor: 'orange'
    },
    headerTitle : {
        fontSize:20,
        fontWeight: 'bold'
    },
    profilePressable:{
        padding: 10,
        backgroundColor: 'blue',
        borderRadius: 5
    },
    pressText:{
        color: 'white',
        fontWeight: 'bold'
    }
})

export default AppHeader