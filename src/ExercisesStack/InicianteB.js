import { View, Text, StyleSheet, FlatList } from 'react-native';
import React, { Component } from 'react';

class InicianteB extends Component {
    constructor(props) {
        super(props);
        this.state = {
            InicianteB: [
                { id: '1', treino: 'Puxador frente' },
                { id: '2', treino: 'Remada Máquina Neutra' },
                { id: '3', treino: 'Voador Inverso' },
                { id: '4', treino: 'Flexão Lombar' },
                { id: '5', treino: 'Rosca Simultânea' },
                { id: '6', treino: 'Cadeira Flexora' },
                { id: '7', treino: 'Rosca Femoral' },
                { id: '8', treino: 'Cadeira Adutora' },
                { id: '9', treino: 'Panturrilha Sentado' },
            ]
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.InicianteB}
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

export default InicianteB;
