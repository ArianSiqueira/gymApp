import { View, Text, StyleSheet, FlatList } from 'react-native';
import React, { Component } from 'react';

class Workouts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            treinos: [
                { id: '1', treino: 'Supino reto' },
                { id: '2', treino: 'Supino reto' },
                { id: '3', treino: 'Supino reto' },
            ]
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.treinos}
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
        // borderBottomWidth: 1,
        // borderBottomColor: '#ccc',
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

export default Workouts;
