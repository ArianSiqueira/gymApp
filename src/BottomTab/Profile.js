import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    StatusBar,
    TextInput,
    Button
} from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

import { useNavigation } from '@react-navigation/native';

const Profile = () => {
    const navigation = useNavigation()
    const [nome, setNome] = useState('');
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [nomeSalvo, setNomeSalvo] = useState('');

    const salvarNome = () => {
        setNomeSalvo('Nome Salvo: ${nome}')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Informações Gerais</Text>
            <View style={styles.separator} />
            <Text style={styles.subTitle}>Pessoais: </Text>


            {/* NOME */}
            <View style={styles.info}>

                <View style={styles.infos}>
                    <Ionicons name={'person-circle'} size={24} color={'#5C5470'} />
                    <Text style={styles.infosText}>Nome: </Text>
                </View>

                <View style={styles.list}>
                    <TextInput
                        style={styles.infoText}
                        placeholder='Insira seu nome'
                        onChangeText={(text) => setNome(text)}
                        value={nome}
                    />
                </View>

            </View>

            <View style={styles.separatorList} />

            {/* ALTURA */}
            <View style={styles.info}>

                <View style={styles.infos}>
                    <Ionicons name={'man'} size={24} color={'#5C5470'} />
                    <Text style={styles.infosText}>Altura: </Text>
                </View>

                <View style={styles.list}>
                    <TextInput
                        style={styles.infoText}
                        placeholder='Insira sua altura'
                        onChangeText={(text) => setAltura(text)}
                        value={altura}
                    />
                </View>

            </View>

            <View style={styles.separatorList} />

            {/* PESO */}
            <View style={styles.info}>

                <View style={styles.infos}>
                    <Ionicons name={'scale'} size={24} color={'#5C5470'} />
                    <Text style={styles.infosText}>Peso: </Text>
                </View>

                <View style={styles.list}>
                    <TextInput
                        style={styles.infoText}
                        placeholder='Insira seu peso'
                        onChangeText={(text) => setPeso(text)}
                        value={peso}
                    />
                </View>
            </View>

        </View>
    )
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        backgroundColor: '#FAF0E6',
        marginTop: StatusBar.currentHeight,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#352F44',
        paddingVertical: 10,
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
        width: 'auto',
        height: 'auto',
        padding: 10,
        flexDirection: 'row',
        textAlign: 'center'
    },

    infos: {
        flexDirection: 'row',
        width: '20%',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    list: {
        width: '70%',
        alignItems: 'flex-end'
    },

    infoText: {
        lineHeight: 24,
        marginLeft: 10,
        justifyContent: 'flex-end'
    },

    infosText: {
        color: '#5C5470',
    }
});