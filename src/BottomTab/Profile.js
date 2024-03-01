import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Modal,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    // Recuperar nome salvo ao iniciar o componente
    retrieveData();
  }, []); // Executado apenas uma vez no montante do componente

  const saveName = async () => {
    try {
      // Salvar o nome no AsyncStorage
      await AsyncStorage.setItem('userName', name);
      setModalVisible(false);
    } catch (error) {
      console.error('Erro ao salvar dados:', error);
    }
  };

  const retrieveData = async () => {
    try {
      // Recuperar o nome do AsyncStorage ao iniciar o componente
      const storedName = await AsyncStorage.getItem('userName');
      if (storedName !== null) {
        setName(storedName);
      }
    } catch (error) {
      console.error('Erro ao recuperar dados:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Informações Gerais</Text>
      <View style={styles.separator} />
      <Text style={styles.subTitle}>Pessoais: </Text>

      {/* NOME */}
      <View>
        <Button title="Adicionar Nome" onPress={() => setModalVisible(true)} />

        <Modal visible={modalVisible}>
          <View>
            <TextInput
              placeholder="Digite seu nome"
              value={name}
              onChangeText={(text) => setName(text)}
            />
            <Button title="Salvar" onPress={saveName} />
          </View>
        </Modal>

        <Text>Nome: {name}</Text>
      </View>

      <View style={styles.separatorList} />

      {/* ALTURA */}
      <View style={styles.info}>
        <View style={styles.infos}>
          <Ionicons name={'man'} size={24} color={'#5C5470'} />
          <Text style={styles.infosText}>Altura: </Text>
        </View>
        <View style={styles.list}>
          <Text
            style={styles.infoText}
            onPress={() => navigation.navigate('Altura')}
          >aqui</Text>
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
          <Text
            style={styles.infoText}
            onPress={() => navigation.navigate('Peso')}
          >aqui</Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        backgroundColor: '#FAF0E6',
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