import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Exercises = () => {
    const navigation = useNavigation()
    return (
        <ScrollView style={styles.container}>
            <View style={styles.info}>
                <Text style={styles.title}>Treinos</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("Workouts")}
                >
                    <Ionicons name="ellipsis-vertical-outline" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <Text
                style={styles.infosText}
                onPress={() => navigation.navigate("Workouts")
                }>
                Meus treinos
            </Text>
        </ScrollView>
    )
}

export default Exercises

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        backgroundColor: '#FAF0E6',
    },
    title: {
        // fontSize: 24,
        fontWeight: 'bold',
        color: '#352F44',
        paddingVertical: 10,
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    subTitle: {
        marginBottom: 10,
        color: '#352F44',
    },

    separator: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginBottom: 10,
        width: '100%',
        alignItems: 'center'
    },

    separatorList: {
        width: '100%',
        borderBottomColor: 'black',
        borderBottomWidth: 0.2
    },

    info: {
        padding: 2,
        flexDirection: 'row',
        alignItems: 'space-evenly',
        justifyContent: 'space-between',
        lineHeight: '10px',
    },

    infos: {
        flexDirection: 'row',
        width: '20%',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    infosText: {
        color: '#5C5470',
        backgroundColor: '#B9B4C7',
        width: '40%',
        padding: 35,
        borderRadius: 10,
        fontSize: 16,
    },

    list: {
        width: '70%',
        alignItems: 'flex-end'
    },

    infoText: {
        lineHeight: 24,
        marginLeft: 10,
        justifyContent: 'flex-end'
    }
});