import React from 'react';
import { TouchableOpacity, View, Share } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { colors } from "../../constants/colors"

const ShareItem = ({ recipe }) => {
  const onShare = async () => {
    try {
        const formattedIngredients = recipe.ingredients.map((ingredient, index) => `${index + 1}. ${ingredient.amount} de ${ingredient.name}`);
        const formattedInstructions = recipe.instructions.map((instruction, index) => `${index + 1}. ${instruction}`);

      const result = await Share.share({
        message: `
        Mirá esta receta. Descargate la app!
          *Título:* ${recipe.title}
          *Descripción:* ${recipe.description}
          *Ingredientes:*
          ${formattedIngredients.join('\n')}
          *Instrucciones:*
          ${formattedInstructions.join('\n')}
        `
      });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
      } else {
      }
    } else if (result.action === Share.dismissedAction) {
    }
  } catch (error) {
    Alert.alert(error.message);
  }
};

  return (
    <View>
      <TouchableOpacity onPress={onShare}>
        <MaterialCommunityIcons name="share-variant" size={26} color={colors.primary} />
      </TouchableOpacity>
    </View>
  );
};


export default ShareItem;