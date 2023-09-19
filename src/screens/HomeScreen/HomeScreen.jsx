import { FlatList, View } from 'react-native'
import { CategoryItem } from './components'
import { Header } from '../../components'
import React from 'react'
import dataCategories from '../../data/dataCategories'
import styles from './HomeScreen.style'

const HomeScreen = ({  navigation }) => {
  return (
    <View style={styles.container}>
      {/* <Header title={'Categorías'} /> */}
      <FlatList
        data={dataCategories}
        keyExtractor={category => category}
        renderItem={({ item }) => (
          <CategoryItem
            category={item}
            navigation={navigation}
          />
        )}
      />
    </View>
  )
}

export default HomeScreen