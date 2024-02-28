import { View, Text, StyleSheet, FlatList } from 'react-native';
import React, { Component } from 'react';

class IntermediarioB extends Component {
    constructor(props) {
        super(props);
        this.state = {
          IntermediarioB: [
                { id: '1', treino: 'Puxador Costas' },
                { id: '2', treino: 'Remada Máquina Neutra' },
                { id: '3', treino: 'Puxador Inverso Inclinado' },
                { id: '4', treino: 'Crucifixo Invertido' },
                { id: '5', treino: 'Encolhimento Posterior Smith' },
                { id: '6', treino: 'Rosca Direta W' },
                { id: '7', treino: 'Rosca Scott Máquina' },
                { id: '8', treino: 'Abdominal Curto com Peso' },
            ]
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.IntermediarioB}
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

export default IntermediarioB;
