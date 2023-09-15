import { FlatList, View } from 'react-native'
import { CategoryItem } from './components'
import { Header } from '../../components'
import React from 'react'
import dataCategories from '../../data/dataCategories'
import styles from './HomeScreen.style'

const HomeScreen = ({ setCategorySelected }) => {
  return (
    <View style={styles.container}>
      <Header title={'Categories'} />
      <FlatList
        data={dataCategories}
        keyExtractor={category => category}
        renderItem={({ item }) => (
          <CategoryItem
            category={item}
            setCategorySelected={setCategorySelected}
          />
        )}
      />
    </View>
  )
}

export default HomeScreen