import {
    View,
    Text,
    StyleSheet,
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
            <View style={styles.list}>
                <Text
                    style={styles.infosText}
                    onPress={() => navigation.navigate("Iniciante")
                    }>
                    Treino Iniciante
                </Text>
                <Text
                    style={styles.infosText}
                    onPress={() => navigation.navigate("Intermediário")
                    }>
                    Treino Intermediário
                </Text>
                <Text
                    style={styles.infosText}
                    onPress={() => navigation.navigate("Avançado")
                    }>
                    Treino Avançado
                </Text>
            </View>
        </ScrollView>
    )
}

export default Exercises

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        backgroundColor: '#FAF0E6',
    },
    
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#352F44',
        marginBottom: 20,
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    info: {
        flexDirection: 'row',
        alignItems: 'space-evenly',
        justifyContent: 'space-between',
    },

    infosText: {
        color: '#5C5470',
        backgroundColor: '#B9B4C7',
        width: '80%',
        padding: 10,
        borderRadius: 10,
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 2,
    },

    list: {
        width: '100%',
        alignItems: 'center',
        marginTop: 10
    },
});