import {RecipesScreen, HomeScreen, DetailScreen} from "./src/screens"
// import fonts from './src/global/fonts'
// import { useFonts } from 'expo-font'
import { useState } from 'react'

export default function App() {
  // const [fontsLoaded] = useFonts(fonts)
  const [categorySelected, setCategorySelected] = useState('')
  const [recipeSelected, setRecipeSelected] = useState()

  // if (!fontsLoaded) {
  //   return null
  // }

  return recipeSelected ? (
    <DetailScreen recipe={recipeSelected} />
  ) : categorySelected ? (
    <RecipesScreen
      category={categorySelected}
      setRecipeSelected={setRecipeSelected}
    />
  ) : (
    <HomeScreen setCategorySelected={setCategorySelected} />
  )
}