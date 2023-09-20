import { Image, Text, View, ScrollView } from 'react-native';
import { Header } from '../../components';
import React from 'react';
import styles from './DetailScreen.style';
import { FontAwesome } from '@expo/vector-icons'

const DetailScreen = ({ route }) => {
  const {recipe} = route.params
  return (
    <View style={styles.container}>
      {/* <Header title={'Detalle'} /> */}
      <ScrollView 
      contentContainerStyle={styles.scrollContainer}
      bounces={false}
      showsVerticalScrollIndicator={false}>
        <Image style={styles.image} source={{ uri: recipe.images[0] }} loading="auto" />
        <Text style={styles.title}>{recipe.title}</Text>
        <View style={styles.textContainer}>
          <Text>{recipe.description}</Text>
          <Text style={styles.subtitle}><FontAwesome name="shopping-basket" size={24} color="#A2C6BD" />  Ingredientes:</Text>
          <Text>{recipe.ingredients}</Text>
          <Text style={styles.subtitle}><FontAwesome name="cutlery" size={24} color="#A2C6BD" />  Instrucciones:</Text>
          <Text>{recipe.instructions}</Text>
        </View>
      </ScrollView>
    </View>
  );
};


export default DetailScreen;