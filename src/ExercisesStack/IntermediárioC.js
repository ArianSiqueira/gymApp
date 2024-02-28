import { View, Text, StyleSheet, FlatList } from 'react-native';
import React, { Component } from 'react';

class IntermediarioC extends Component {
    constructor(props) {
        super(props);
        this.state = {
          IntermediarioC: [
                { id: '1', treino: 'Leg Press 45' },
                { id: '2', treino: 'Afundo Smith' },
                { id: '3', treino: 'Cadeira Extensora' },
                { id: '4', treino: 'Mesa Flexora' },
                { id: '5', treino: 'Rosca Femoral' },
                { id: '6', treino: 'Bom Dia Parcial' },
                { id: '7', treino: 'Flexão Lombar Solo Isométrica' },
            ]
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.IntermediarioC}
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

export default IntermediarioC;
