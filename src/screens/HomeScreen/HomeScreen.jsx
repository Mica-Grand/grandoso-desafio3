import { FlatList, View } from 'react-native'
import { CategoryItem } from './components'
import { Header } from '../../components'
import React from 'react'
import styles from './HomeScreen.style'
import { useGetCategoriesQuery, useGetFavoriteRecipesQuery } from '../../services/recipesApi' 
import { useEffect } from "react";
import { setFavoriteRecipes } from "../../features/favs/favsSlice";
import { useDispatch, useSelector } from 'react-redux';


const HomeScreen = ({ navigation }) => {
  const { data, isLoading } = useGetCategoriesQuery();
  const { localId } = useSelector((state) => state.auth);
  const { data: firebaseFavoriteRecipes, isError, isLoading: favoritesLoading } = useGetFavoriteRecipesQuery(localId);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!favoritesLoading && !isError && firebaseFavoriteRecipes !== null) {
      const transformedData = Object.keys(firebaseFavoriteRecipes).map((key) => ({
        id: key,
        ...firebaseFavoriteRecipes[key],
      }));
      dispatch(setFavoriteRecipes(transformedData));
    }
  }, [firebaseFavoriteRecipes, favoritesLoading, isError]);

  return (
    <View style={styles.container}>
      {/* <Header title={'Categorías'} /> */}
      {!isLoading && (
        <FlatList
          data={data}
          keyExtractor={(category) => category.title}
          renderItem={({ item }) => (
            <CategoryItem
              category={item.title}
              picture={item.picture}
              navigation={navigation}
            />
          )}
        />
      )}
    </View>
  );
};

export default HomeScreen;
