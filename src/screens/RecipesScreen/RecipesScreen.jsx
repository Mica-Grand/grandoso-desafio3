import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { Header, SearchInput, HeartButton } from "../../components";
import styles from "./RecipesScreen.style";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../../constants/colors";
import { useGetRecipesByCategoryQuery } from "../../services/recipesApi";
import { useSelector } from "react-redux";

const RecipesScreen = ({ navigation }) => {
  const category = useSelector((state) => state.explorer.categorySelected);
  const [keyword, setKeyword] = useState("");
  const {data, isLoading} = useGetRecipesByCategoryQuery(category);

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
            <TouchableOpacity
              onPress={() => navigation.navigate("Detalle", { recipe: item })}
            >
              <MaterialIcons
                name="more-horiz"
                size={28}
                color={colors.primary}
              />
            </TouchableOpacity>
            <View style={{ marginLeft: 20 }}>
              <HeartButton recipe={item} />
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
        data={Object.values(data)}
        renderItem={renderRecipeItem}
        keyExtractor={(item) => (item ? item.id.toString() : '')}
        style={styles.flatList}
      />
      )}
    </View>
  );
};

export default RecipesScreen;
