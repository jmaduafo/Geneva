import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderText from '../HeaderText'
import generalStyles from '../../constants/generalStyles'

const PopularGroups = () => {
  return (
    <View style={generalStyles.homeCategories }>
      <HeaderText text='Groups You May Like'/>
    </View>
  )
}

export default PopularGroups

const styles = StyleSheet.create({})