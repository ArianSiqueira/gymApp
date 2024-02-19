import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const PreWorkouts = () => {
    return (
        <View style={styles.container}>
            <Text>PreWorkouts</Text>
        </View>
    )
}

export default PreWorkouts

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#739072',
        alignItems: 'center',
        justifyContent: 'center',
    },
});