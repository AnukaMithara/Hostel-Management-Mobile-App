import { View, Text, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from 'react-native-paper';

import welcomeImage from '../../assets/images/welcome.png';
import { textLightGray, textDarkGray, primaryBlue } from '../constants/Colors';

const Welcome = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.contentContainer}>
                <View style={styles.imageContainer}>
                    <Image source={welcomeImage} resizeMode='contain' style={styles.image} />
                </View>
                <Text style={styles.welcomeText}>Welcome!</Text>
                <Text style={styles.greetText}>Hostel Management University of Jaffna Kilinochchi Premises</Text>
                <Button
                    mode='contained'
                    style={styles.loginButton}
                    buttonColor={primaryBlue}
                    labelStyle={{ fontSize: 16 }}
                    onPress={() => navigation.navigate('Login')}
                >
                    Login
                </Button>
                <Button
                    mode='outlined'
                    style={styles.signUpButton}
                    textColor={primaryBlue}
                    labelStyle={{ fontSize: 16 }}
                    onPress={() => navigation.navigate('SignUp')}
                >
                    Sign Up
                </Button>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: '100%'
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    image: {
        width: '80%',
        height: 320,
    },
    welcomeText: {
        fontFamily: 'Roboto Bold',
        fontSize: 24,
        color: textDarkGray,
        textAlign: 'center',
        margin: 15,
    },
    greetText: {
        fontFamily: 'Roboto Regular',
        fontSize: 16,
        color: textLightGray,
        width: '70%',
        textAlign: 'center',
    },
    loginButton: {
        marginTop: 20,
        marginBottom: 8,
        width: '80%',
        borderRadius: 9,
    },
    signUpButton: {
        width: '80%',
        borderColor: primaryBlue,
        borderRadius: 9,
    },
})

export default Welcome