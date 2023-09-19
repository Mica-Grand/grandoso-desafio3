import { Image, Pressable, Text, View, useWindowDimensions } from 'react-native'
import React, { useEffect } from 'react'

import { Card } from '../../../../components'
import styles from './CategoryItem.style'

const CategoryItem = ({ category, navigation }) => {

  return (
    <Pressable onPress={() => navigation.navigate("Recetas",{category})}>
      <Card style={styles.cardContainer}>
        <Text style={styles.text}>{category}</Text>
      </Card>
    </Pressable>
  )
}

export default CategoryItem