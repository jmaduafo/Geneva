import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={ styles.container }>
      <Text style={ styles.text }>Home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEAD8A',
    paddingTop: 70,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20
  },
  text: {
    color: '#084335'
  }
})