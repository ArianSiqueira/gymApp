import { View, Text, StyleSheet, FlatList } from 'react-native';
import React, { Component } from 'react';

class IntermediarioA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            IntermediarioA: [
                { id: '1', treino: 'Supino Plano' },
                { id: '2', treino: 'Supino Inclinado com Alteres' },
                { id: '3', treino: 'Voador' },
                { id: '4', treino: 'Desenvolvimento Costas Smith' },
                { id: '5', treino: 'Elevação Lateral' },
                { id: '6', treino: 'Tríceps Testa W' },
                { id: '7', treino: 'Tríceps Puxador Corda' },
                { id: '8', treino: 'Panturrilhas em Pé Livre' },
            ]
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.IntermediarioA}
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

export default IntermediarioA;
