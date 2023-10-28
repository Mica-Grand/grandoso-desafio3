import React from 'react';
import { TouchableOpacity } from 'react-native';
import { colors } from '../../constants/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from "react-redux";
import { addFavoriteRecipe, removeFavoriteRecipe } from "../../features/favs/favsSlice";
import { addFavoriteRecipe as addFavoriteRecipeToDB, removeFavoriteRecipe as removeFavoriteRecipeFromDB } from "../../db";

const HeartButton = ({ recipe }) => {
  const dispatch = useDispatch();
  const favoriteRecipes = useSelector((state) => state.favs.favoriteRecipes);
  const isFavorited = favoriteRecipes.some((favRecipe) => favRecipe.id === recipe.id);
  const { localId } = useSelector((state) => state.auth);

  const toggleFavorite = async () => {
    if (isFavorited) {
      dispatch(removeFavoriteRecipe(recipe.id));

      await removeFavoriteRecipeFromDB(localId, recipe.id);
    } else {
      dispatch(addFavoriteRecipe(recipe));

      await addFavoriteRecipeToDB(localId, recipe.id);
    }
  };

  return (
    <TouchableOpacity onPress={toggleFavorite}>
      <MaterialCommunityIcons
        name={isFavorited ? "heart" : "heart-outline"}
        size={24}
        color={isFavorited ? colors.primary : "gray"}
      />
    </TouchableOpacity>
  );
};

export default HeartButton;
