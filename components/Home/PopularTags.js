import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import HeaderText from '../HeaderText'
import generalStyles from '../../constants/generalStyles'
import SmallBanner from '../SmallBanner'

const PopularTags = () => {
  const array = ['Health', 'Karma Sutra', 'Ick', 'ASMR', 'AITA', 'DIY Furniture']

  return (
    <SafeAreaView>
      <View style={generalStyles.homeCategories }>
        <HeaderText text='Popular Tags'/>
        <FlatList 
          data={array}
          renderItem={({item}) => <SmallBanner title={item} />}
          // Setting a unique key for each item
          keyExtractor={item => item}
          horizontal
          // Rendered between the items to create a gap
          ItemSeparatorComponent={
            () => <View style={{ width: 15 }}/>
          }
          // Hides scrollbar vertically and horizontally
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          />
      </View>
    </SafeAreaView>
  )
}

export default PopularTags

const styles = StyleSheet.create({})