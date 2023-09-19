import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { Header, SearchInput } from '../../components';
import allRecipes from '../../data/recipes';
import styles from './RecipesScreen.style';

const RecipesScreen = ({ navigation, route }) => {
  const [arrRecipes, setArrRecipes] = useState([]);
  const [keyword, setKeyword] = useState('');
  const {category} = route.params
  



  useEffect(() => {
    if (category) {
      const recipes = allRecipes.filter(recipe => recipe.category === category);
      const recipesFiltered = recipes.filter(recipe => recipe.title.includes(keyword));
      setArrRecipes(recipesFiltered);
    } else {
      const recipesFiltered = allRecipes.filter(recipe => recipe.title.includes(keyword));
      setArrRecipes(recipesFiltered);
    }
  }, [category, keyword]);

  const renderRecipeItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.recipeItem} onPress={() => navigation.navigate("Detalle", {recipe: item})} >
        <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} loading="auto"/>
        <View style={styles.recipeInfo}>
          <View>
            <Text style={styles.recipeTitle}>{item.title}</Text>
            <Text style={styles.recipeDescription}>{item.description}</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Detalle", {recipe: item})} style={styles.viewButton}>
            <Text style={styles.viewButtonText}>Ver más</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* <Header title={category} /> */}
      <View style={styles.inputContainer}>
        <SearchInput onSearch={setKeyword} />
      </View>
      <FlatList
        data={arrRecipes}
        renderItem={renderRecipeItem}
        keyExtractor={item => item.id.toString()}
        style={styles.flatList}
      />
    </View>
  );
};

export default RecipesScreen;
