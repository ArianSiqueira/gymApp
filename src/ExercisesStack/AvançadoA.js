import { View, Text, StyleSheet, FlatList } from 'react-native';
import React, { Component } from 'react';

class AvançadoA extends Component {
    constructor(props) {
        super(props);
        this.state = {
          AvançadoA: [
                { id: '1', treino: 'Supino Inclinado' },
                { id: '2', treino: 'Voador' },
                { id: '3', treino: 'Supino Máquina' },
                { id: '4', treino: 'Desenvolvimento Articulado' },
                { id: '5', treino: 'Elevação Frontal com Barra' },
                { id: '6', treino: 'Remada Alta' },
                { id: '7', treino: 'Tríceps Frances 45 Barra W' },
                { id: '8', treino: 'Tríceps Puxador' },
            ]
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.AvançadoA}
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

export default AvançadoA;