import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HeaderText = ({ text }) => {
  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={ header.font }>{text}</Text>
    </View>
  )
}

export default HeaderText

const header = StyleSheet.create({
    font: {
        color: '#084335',
        fontSize: 36,
        fontFamily: 'Erangle'
    }
})