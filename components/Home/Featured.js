import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderText from '../HeaderText'
import generalStyles from '../../constants/generalStyles'

const Featured = () => {
  return (
    <View style={generalStyles.homeCategories }>
      <HeaderText text='Featured' />
    </View>
  )
}

export default Featured

const styles = StyleSheet.create({})