import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, TextInput, Button, FlatList } from 'react-native';
import { Timer } from 'react-native-stopwatch-timer';
import { Ionicons } from '@expo/vector-icons';

const Treinos = () => {
    const [timerStart, setTimerStart] = useState(false);
    const [timerReset, setTimerReset] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [customTime, setCustomTime] = useState('');
    const [selectedTime, setSelectedTime] = useState(null);

    const toggleTimer = () => {
        setTimerStart(!timerStart);
        setTimerReset(false);
    };

    const resetTimer = () => {
        setTimerStart(false);
        setTimerReset(true);
    };

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const handleCustomTime = () => {
        if (customTime !== '') {
            // Lógica para lidar com o tempo customizado
            setTimerStart(true);
            setTimerReset(false);
            setModalVisible(false);
            setSelectedTime(null);
        }
    };

    const handleListItemPress = (item) => {
        setCustomTime('');
        setSelectedTime(item);
    };

    const getFormattedTime = (time) => {
        const minutes = Math.floor(time.minutes);
        const seconds = Math.floor(time.seconds);

        console.log(`${minutes}:${seconds}`);
    };

    // Lista de tempos pré-definidos
    const predefinedTimes = [
        { id: '1', label: '15 sec', time: 15000 },
        { id: '2', label: '30 sec', time: 30000 },
        { id: '3', label: '60 sec', time: 60000 },
        { id: '4', label: '1min30s', time: 90000 },
        { id: '5', label: '2 min', time: 120000 },
        { id: '6', label: '2min30s', time: 150000 },
        { id: '7', label: '3 min', time: 180000 },
        { id: '8', label: '3min30s', time: 210000 },
        { id: '9', label: '4 min', time: 240000 },
    ];

    return (
        <View style={styles.container}>
            {/* Ícone para abrir o modal */}
            <TouchableOpacity onPress={openModal}>
                <Ionicons name="timer-outline" size={50} color="black" />
            </TouchableOpacity>

            {/* Timer */}
            <TouchableOpacity onPress={toggleTimer}>
                <Timer
                    totalDuration={selectedTime ? selectedTime.time : 0} // Use o tempo selecionado ou 90 segundos por padrão
                    msecs={false}
                    start={timerStart}
                    reset={timerReset}
                    options={options}
                    handleFinish={() => alert('Timer concluído')} // Adicione a lógica desejada ao finalizar o timer
                    getTime={getFormattedTime}
                />
            </TouchableOpacity>

            {/* Botões de controle para o Timer */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={toggleTimer} style={styles.button}>
                    <Text style={styles.buttonText}>{timerStart ? 'Stop' : 'Start'}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={resetTimer} style={styles.button}>
                    <Text style={styles.buttonText}>Reset</Text>
                </TouchableOpacity>
            </View>

            {/* Modal para configurar o tempo */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModal}
            >
                <View style={styles.modalContainer}>
                    <Text style={{ fontSize: 24, marginBottom: 10, color: '#FAF0E6'}}>Escolha um tempo pré-definido:</Text>

                    {/* Lista de tempos pré-definidos */}
                    <FlatList
                        style={styles.flatList}
                        data={predefinedTimes}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={[
                                    styles.listItem,
                                    selectedTime && selectedTime.id === item.id && styles.selectedListItem,
                                ]}
                                onPress={() => handleListItemPress(item)}
                            >
                                <Text style={styles.listItemText}>{item.label}</Text>
                            </TouchableOpacity>
                        )}
                    />
                    <Button title="Fechar" onPress={closeModal} style={styles.buttonClose} />
                </View>
            </Modal>
        </View>
    );
};

const options = {
    container: {
        backgroundColor: '#352F44',
        padding: 5,
        borderRadius: 5,
        width: 142,
    },
    text: {
        fontSize: 30,
        color: '#FFF',
        marginLeft: 7,
    },
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAF0E6',
        alignItems: 'center',
        justifyContent: 'center',
    },

    modalContainer: {
        flex: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },

    buttonContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },

    buttonClose: {
        backgroundColor: 'red'
    },

    button: {
        backgroundColor: '#B9B4C7',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginHorizontal: 5,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },

    listItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },

    selectedListItem: {
        backgroundColor: '#B9B4C7',
        width: 'auto',
        borderRadius: 20
    },

    listItemText: {
        fontSize: 16,
        height: 30
    },
    flatList: {
        width: 100,
        alignContent: 'center',
        borderRadius: 20,
        backgroundColor: '#FAF0E6',
        maxHeight: 400,
        marginBottom: 20
    }
});

export default Treinos;
