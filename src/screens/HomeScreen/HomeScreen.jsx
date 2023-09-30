import { FlatList, View } from 'react-native'
import { CategoryItem } from './components'
import { Header } from '../../components'
import React from 'react'
import styles from './HomeScreen.style'
import { useGetCategoriesQuery } from '../../services/recipesApi'

const HomeScreen = ({  navigation }) => {
  const {data, isLoading }= useGetCategoriesQuery()
  return (
    <View style={styles.container}>
      {/* <Header title={'Categorías'} /> */}
      {!isLoading && (

      <FlatList
        data={data}
        keyExtractor={category => category.title}
        renderItem={({ item }) => (
          <CategoryItem
            category={item.title}
            picture={item.picture}
            navigation={navigation}
          />
        )}
      />
      )}
    </View>
  )
}

export default HomeScreen