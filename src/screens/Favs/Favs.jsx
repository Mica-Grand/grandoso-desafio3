import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Suspense } from "react";
import { View, Text, FlatList, Image } from "react-native";
import styles from "./Favs.style";

const Favs = () => {
  const favoriteRecipes = useSelector((state) => state.favs.favoriteRecipes);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.recipeItem}>
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
      </View>
    );
  };

  return (
    <Suspense fallback={<Text>Loading...</Text>}>
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
    </Suspense>
  );
};

export default Favs;
