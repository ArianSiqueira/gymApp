import { 
  View, 
  Text, 
  StyleSheet,
  StatusBar
 } from 'react-native'
import React from 'react'

const Logs = () => {
  return (
    <View style={styles.container}>
      <Text>Logs</Text>
    </View>
  )
}

export default Logs

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAF0E6',
        marginTop: StatusBar.currentHeight,
    },
});