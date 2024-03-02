import { View, Text, StyleSheet, FlatList } from 'react-native';
import React, { Component } from 'react';

class AvançadoC extends Component {
    constructor(props) {
        super(props);
        this.state = {
            AvançadoC: [
                { id: '1', treino: 'Agachamento' },
                { id: '2', treino: 'Cadeira Extensora' },
                { id: '3', treino: 'Hack Machine' },
                { id: '4', treino: 'Mesa Flexora' },
                { id: '5', treino: 'Cadeira Flexora' },
                { id: '6', treino: 'Leg Pres Máquina' },
                { id: '7', treino: 'Abdominal Declinado com Peso' },
                { id: '8', treino: 'Abdominal Crunch' },
            ]
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.AvançadoC}
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

    treinos: {
        width: '60%',
    },

    treino: {
        width: '100%',
        backgroundColor: 'red'
    }
});

export default AvançadoC;