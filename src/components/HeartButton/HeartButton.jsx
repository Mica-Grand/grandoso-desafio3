import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { colors } from '../../constants/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addFavoriteRecipe, removeFavoriteRecipe } from '../../features/favs/favsSlice';
import { insertFavoriteRecipe, deleteFavoriteRecipe } from "../../db";

const HeartButton = ({ recipe }) => {
  const dispatch = useDispatch();
  const { localId } = useSelector(state => state.auth);
  const favoriteRecipes = useSelector((state) => state.favs.favoriteRecipes);
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    setIsFavorited(favoriteRecipes.some((favRecipe) => favRecipe.id === recipe.id));
  }, [favoriteRecipes, recipe]);
  
  const toggleFavorite = () => {
    if (isFavorited) {
      dispatch(removeFavoriteRecipe(recipe, localId));
      // deleteFavoriteRecipe({ id: recipe.id,
      //   localId,})
      //   .then(() => {
      //     console.log(`Receta eliminada: ${recipe.title}`);
      //   })
      //   .catch((error) => {
      //     console.error('Error al eliminar receta:', error);
      //   });
      
    } else {
      dispatch(addFavoriteRecipe(recipe, localId)); 
      // insertFavoriteRecipe({
      //   id: recipe.id,
      //   localId,
      // })
      //   .then(() => {
      //     console.log(`Receta agregada: ${recipe.title}`);
      //   })
      //   .catch((error) => {
      //     console.error('Error al agregar receta:', error);
      //   });
    }
    setIsFavorited(!isFavorited);
  };


  return (
    <TouchableOpacity onPress={toggleFavorite}>
      <MaterialCommunityIcons
        name={isFavorited ? 'heart' : 'heart-outline'}
        size={24}
        color={isFavorited ? colors.primary : 'gray'}
      />
    </TouchableOpacity>
  );
};

export default HeartButton;
