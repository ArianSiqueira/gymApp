import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    StatusBar
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React, { useLayoutEffect }  from 'react';
import { useNavigation } from '@react-navigation/native';

const Exercises = () => {
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Treinos',
            headerRight: () => (
                <TouchableOpacity
                    style={{ marginRight: 16 }}
                    onPress={() => {
                        // Adicione a lógica desejada ao pressionar o botão
                        console.log('Botão pressionado');
                    }}
                >
                    <Ionicons name="ellipsis-vertical" size={24} color="black" />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    return (
        
        <ScrollView style={styles.container}>
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

    button: {
        alignItems: 'center',
        justifyContent: 'center'
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