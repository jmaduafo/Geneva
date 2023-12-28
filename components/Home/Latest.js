import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderText from '../HeaderText'
import generalStyles from '../../constants/generalStyles'

const Latest = () => {
  return (
    <View style={generalStyles.homeCategories }>
      <HeaderText text='Latest' />
    </View>
  )
}

export default Latest

const styles = StyleSheet.create({})