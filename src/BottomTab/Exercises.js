import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Workouts from '../Stack/Workouts'

const Exercises = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Text>Exercises</Text>
            <Text
                onPress={() => navigation.navigate("Workouts")}
            >Go to Workouts Screen</Text>
        </View>
    )
}

export default Exercises

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D2E3C8',
        alignItems: 'center',
        justifyContent: 'center',
    },
});