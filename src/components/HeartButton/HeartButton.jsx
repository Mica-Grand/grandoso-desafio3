import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { colors } from '../../constants/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from "react-redux";
import { removeFavoriteRecipe, addFavoriteRecipe  } from "../../features/favs/favsSlice";


const HeartButton = ({ recipe }) => {
  const dispatch = useDispatch();
  const favoriteRecipes = useSelector((state) => state.favs.favoriteRecipes);
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    setIsFavorited(favoriteRecipes.some((favRecipe) => favRecipe.id === recipe.id));
  }, [favoriteRecipes, recipe]);

  const toggleFavorite = () => {
    if (isFavorited) {
      dispatch(removeFavoriteRecipe(recipe));
    } else {
      dispatch(addFavoriteRecipe(recipe));
    }
    setIsFavorited(!isFavorited);
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

