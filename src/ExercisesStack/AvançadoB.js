import { View, Text, StyleSheet, FlatList } from 'react-native';
import React, { Component } from 'react';

class AvançadoB extends Component {
    constructor(props) {
        super(props);
        this.state = {
          AvançadoB: [
                { id: '1', treino: 'Remada Cavalinho' },
                { id: '2', treino: 'Puxada Alta' },
                { id: '3', treino: 'Remada na Polia Baixa' },
                { id: '4', treino: 'Remada Máquina Neutra' },
                { id: '5', treino: 'Voador Inverso' },
                { id: '6', treino: 'Encolhimento com Alteres' },
                { id: '7', treino: 'Rosca Direta W' },
                { id: '8', treino: 'Rosca Polia' },
            ]
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.AvançadoB}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <Text style={styles.title}>{item.treino}</Text>
                        </View>
                    )}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAF0E6',
    },

    title: {
        color: '#5C5470'
    },

    item: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        padding: 10,
        height: 40,
        margin: 10,
        backgroundColor: '#FFF8E3'
    },

    treinos: {
        width: '60%',
    },

    treino: {
        width: '100%',
        backgroundColor: 'red'
    }
});

export default AvançadoB;