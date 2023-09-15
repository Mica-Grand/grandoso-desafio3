import { Image, Text, View } from 'react-native'

import { Header } from '../../components'
import React from 'react'
import styles from './DetailScreen.style'

const DetailScreen = ({ recipe }) => {
  return (
    <View style={styles.container}>
      <Header title={'Detalle'} />
      {/* <Image style={styles.image} source={{ url: recipe.images[0] }} /> */}
      <Text style={styles.title}>{recipe.title}</Text>
      <Text>{recipe.description}</Text>
      <Text>Ingredientes:</Text>
      <Text>{recipe.ingredients}</Text>
      <Text>Instrucciones:</Text>
      <Text>{recipe.instructions}</Text>
    </View>
  )
}

export default DetailScreen