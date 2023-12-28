import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import generalStyles from '../constants/generalStyles'

const SmallBanner = ({ title }) => {
  return (
    <View style={ styles.rounded }>
      <Text style={ generalStyles.normalText }>{ title }</Text>
    </View>
  )
}

export default SmallBanner

const styles = StyleSheet.create({
    rounded: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 25,
        paddingRight: 25,
        borderRadius: 30,
        borderWidth: 1.5,
        borderColor: '#084335'
    }
})