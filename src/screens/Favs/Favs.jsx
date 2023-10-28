import React, { useEffect } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { fetchFavoriteRecipes } from "../../db";
import styles from "./Favs.style";
import {  useSelector } from 'react-redux'

const Favs = ({navigation}) => {
  const favoriteRecipes = useSelector((state) => state.favs.favoriteRecipes);
  const localId = useSelector((state) => state.auth.localId);


  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.recipeItem}
      onPress={() => navigation.navigate("Detalle", { recipe: item })}
      >
        <View>
          <Image
            source={{ uri: item.thumbnail }}
            style={styles.thumbnail}
            loading="auto"
          />
        </View>
        <View style={styles.recipeInfo}>
          <Text style={styles.recipeTitle}>{item.title}</Text>
          <Text style={styles.recipeDescription}>{item.description}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {favoriteRecipes.length === 0 ? (
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            No hay recetas agregadas a favoritos.
          </Text>
        </View>
      ) : (
        <FlatList
          data={favoriteRecipes}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          style={styles.flatList}
        />
      )}
    </View>
  );
};

export default Favs;
