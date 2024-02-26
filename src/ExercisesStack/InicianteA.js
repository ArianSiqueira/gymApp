import { View, Text, StyleSheet, FlatList } from 'react-native';
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
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.InicianteA}
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

export default InicianteA;
