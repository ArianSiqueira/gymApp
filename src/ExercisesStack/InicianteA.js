import {
    View,
    Text,
    StyleSheet,
    FlatList,
} from 'react-native';

import React, { Component } from 'react';

class InicianteA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            InicianteA: [
                { id: '1', treino: 'Supino Máquina' },
                { id: '2', treino: 'Voador' },
                { id: '3', treino: 'Elevação Lateral' },
                { id: '4', treino: 'Remada Alta' },
                { id: '5', treino: 'Tríceps Puxador' },
                { id: '6', treino: 'Leg Press Máquina' },
                { id: '7', treino: 'Cadeira Extensora' },
                { id: '8', treino: 'Cadeira Abdutora' },
                { id: '9', treino: 'Abdominal curto com peso' },
            ]
        }
    }


    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <FlatList
                    style={styles.containerList}
                    data={this.state.InicianteA}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <Text style={styles.title}>{item.treino}</Text>
                        </View>
                    )}
                />
                <View style={styles.containerButton}>
                    <Text
                        style={styles.startButton}
                        onPress={() => navigation.navigate("Treinos")
                        }>
                        Começar Treino
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F5F5',
    },

    title: {
        color: '#EA580C'
    },

    item: {
        borderBottomWidth: 1,
        borderBottomColor: '#FFE3CA',
        padding: 10,
        height: 40,
        margin: 10,
        backgroundColor: '#FFF8E3'
    },

    containerList: {
        height: '90%'
    },

    containerButton: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 80
    },

    startButton: {
        textAlign: 'center',        
        color: '#5C5470',
        backgroundColor: '#B9B4C7',
        width: '40%',
        height: '40%',
        padding: 5,
        borderRadius: 10,
        fontSize: 14,
        fontWeight: '800'
    }, 
   
});

export default InicianteA;
