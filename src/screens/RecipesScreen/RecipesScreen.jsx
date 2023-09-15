import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { Header, SearchInput } from '../../components'
import React, { useEffect, useState } from 'react'
import allRecipes from '../../data/recipes'
import styles from './RecipesScreen.style'

const RecipesScreen = ({ category, setRecipeSelected }) => {
  const [arrRecipes, setArrRecipes] = useState([])
  const [keyword, setKeyword] = useState('')

  useEffect(() => {
    if (category) {
      const recipes = allRecipes.filter(
        recipe => recipe.category === category
      )
      const recipesFiltered = recipes.filter(recipe =>
        recipe.title.includes(keyword)
      )
      setArrRecipes(recipesFiltered)
    } else {
      const recipesFiltered = allRecipes.filter(recipe =>
        recipe.title.includes(keyword)
      )
      setArrRecipes(recipesFiltered)
    }
  }, [category, keyword])

  return (
    <View style={styles.container}>
      <Header title={category} />
      <SearchInput onSearch={setKeyword} />
      <View style={styles.listContainer}>
        <FlatList
          data={arrRecipes}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => setRecipeSelected(item)}>
              <Text>{item.title}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  )
}

export default RecipesScreen