import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { Header, SearchInput, HeartButton, ShareItem } from "../../components";
import styles from "./RecipesScreen.style";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../../constants/colors";
import { useGetRecipesByCategoryQuery } from "../../services/recipesApi";
import { useSelector } from "react-redux";

const RecipesScreen = ({ navigation }) => {
  const category = useSelector((state) => state.explorer.categorySelected);
  const [keyword, setKeyword] = useState("");
  const [recipes, setRecipes] = useState([])
  const {data, isLoading} = useGetRecipesByCategoryQuery(category);


  useEffect(() => {
    if (!isLoading) {
      const dataArr = Object.values(data)
      setRecipes(dataArr)
      const recipesFiltered = dataArr.filter(recipe =>
        recipe.title.includes(keyword)
      )
      setRecipes(recipesFiltered)
    }
  }, [isLoading, keyword])


  const renderRecipeItem = ({ item }) => {
  

    return (
      <TouchableOpacity
        style={styles.recipeItem}
        onPress={() => navigation.navigate("Detalle", { recipe: item })}
      >
        <Image
          source={{ uri: item.thumbnail }}
          style={styles.thumbnail}
          loading="auto"
        />
        <View style={styles.recipeInfo}>
          <View>
            <Text style={styles.recipeTitle}>{item.title}</Text>
            <Text style={styles.recipeDescription}>{item.description}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <View>
              <TouchableOpacity
              onPress={() => navigation.navigate("Detalle", { recipe: item })}
              >
                <MaterialIcons
                  name="more-horiz"
                  size={28}
                  color={colors.primary}
                />
              </TouchableOpacity>
            </View>
            <View  style={{  marginHorizontal: 10}}>
              <HeartButton recipe={item} />
            </View>
            <View>
              <ShareItem recipe={item}/>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <SearchInput onSearch={setKeyword} />
      </View>
      {!isLoading && (
      <FlatList
        data={recipes}
        renderItem={renderRecipeItem}
        keyExtractor={(item) => (item ? item.id.toString() : '')}
        style={styles.flatList}
      />
      )}
    </View>
  );
};

export default RecipesScreen;
