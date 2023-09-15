import { Image, Text, View, ScrollView } from 'react-native'

import { Header } from '../../components'
import React from 'react'
import styles from './DetailScreen.style'

const DetailScreen = ({ recipe }) => {
  return (
    <ScrollView style={styles.container}>
      <Header title={'Detalle'} />
      <Image style={styles.image} source={{ url: recipe.images[0] }} />
      <Text style={styles.title}>{recipe.title}</Text>
      <View style={styles.textContainer}>
        <Text>{recipe.description}</Text>
        <Text style={styles.subtitle}>Ingredientes:</Text>
        <Text>{recipe.ingredients}</Text>
        <Text style={styles.subtitle}>Instrucciones:</Text>
        <Text>{recipe.instructions}</Text>
      </View>
    </ScrollView>
  )
}

export default DetailScreen