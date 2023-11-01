import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { colors } from "../../constants/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import {
  addRecipeToFavorites,
  removeRecipeFromFavorites,
} from "../../features/favs/favsSlice";
import {
  useDeleteFavoriteMutation,
  usePostFavoriteMutation,
} from "../../services/recipesApi";

const HeartButton = ({ recipe }) => {
  const { localId } = useSelector((state) => state.auth);
  const [triggerPost] = usePostFavoriteMutation();
  const [triggerDelete] = useDeleteFavoriteMutation();
  const dispatch = useDispatch();

  const initialIsFavorite = useSelector((state) =>
    state.favs.favoriteRecipes.some(
      (favoriteRecipe) => favoriteRecipe.id === recipe.id
    )
  );

  const [isFavorite, setIsFavorite] = useState(initialIsFavorite);

  const toggleFavorite = async () => {
    if (isFavorite) {
      // const recipeKey = useSelector((state) => state.favs.recipeKeys[recipe.id]); 
      dispatch(removeRecipeFromFavorites(recipe.id));
      triggerDelete({ recipeId: recipe.id, localId });
      setIsFavorite(false);
      console.log("NotFavorite");
    } else {
      dispatch(addRecipeToFavorites(recipe));
      triggerPost({ recipe, localId })
  //     .unwrap()
  //     .then((result) => {
  //       console.log(result);
  //       dispatch(setRecipeKey({ recipeId: recipe.id, recipeKey: result.name })); 
  //     })
  //     .catch((err) => console.log(err));
  //   setIsFavorite(true);
  //   console.log("isFavorited");
  // }
};
  }

  return (
    <TouchableOpacity onPress={toggleFavorite}>
      <MaterialCommunityIcons
        name={isFavorite ? "heart" : "heart-outline"}
        size={24}
        color={isFavorite ? colors.primary : "gray"}
      />
    </TouchableOpacity>
  );
};

export default HeartButton;
