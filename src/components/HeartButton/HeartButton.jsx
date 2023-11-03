import React from "react";
import { TouchableOpacity } from "react-native";
import { colors } from "../../constants/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { removeRecipeFromFavorites, addRecipeToFavorites, setRecipeKey } from "../../features/favs/favsSlice";
import { usePostFavoriteMutation, useDeleteFavoriteMutation } from "../../services/recipesApi";

const HeartButton = ({ recipe }) => {
  const { localId } = useSelector((state) => state.auth);
  const [triggerPost] = usePostFavoriteMutation();
  const [triggerDelete] = useDeleteFavoriteMutation();
  const dispatch = useDispatch();
  const favoriteRecipes = useSelector((state) => state.favs.favoriteRecipes);
  const recipeKey = useSelector((state) => state.favs.recipeKeys[recipe.id]);
  let isFavorite = false;

  if (favoriteRecipes) {
    isFavorite = favoriteRecipes.some((favRecipe) => favRecipe.id === recipe.id);
  }
  const toggleFavorite = async () => {
 
    if (!isFavorite) {
      dispatch(addRecipeToFavorites(recipe));
      triggerPost({ localId, recipe })
        .unwrap()
        .then((result) => {
          console.log(result);
          dispatch(
            setRecipeKey({ recipeId: recipe.id, recipeKey: result.name })
          );
        })
        .catch((err) => console.log(err));
    } else if (recipeKey) {
      triggerDelete({ localId, recipeKey })
        .unwrap()
        .then((result) => {
          console.log("Delete result:", result);
          dispatch(removeRecipeFromFavorites(recipe));
        })
        .catch((err) => console.log("Delete error:", err));
    }
};
  

  return (
    <TouchableOpacity onPress={toggleFavorite}>
      <MaterialCommunityIcons
        name={isFavorite ? "heart" : "heart-outline"}
        size={26}
        color={colors.primary}
      />
    </TouchableOpacity>
  );
};

export default HeartButton;
