import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons, FontAwesome } from "react-native-vector-icons";
import Featured from '../components/Home/Featured'
import PopularTags from '../components/Home/PopularTags'
import Latest from '../components/Home/Latest'
import PopularGroups from '../components/Home/PopularGroups'
import generalStyles from '../constants/generalStyles';

const Home = () => {
  return (
    <View style={ generalStyles.container }>
      <View style={ styles.setting }>
        <Ionicons name='settings-outline' size={26} color='#084335'/>
      </View>
      <Featured/>
      <PopularTags/>
      <Latest/>
      <PopularGroups/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  text: {
    color: '#084335'
  },
  setting: {
    alignItems: 'flex-end'
  }
})