import React, { useEffect } from 'react';
import AuthStackNavigator from './AuthStackNavigator';
import BottomTabNavigator from './BottomTabNavigator';
import { useDispatch, useSelector } from 'react-redux';
import { setCameraImage, setUser } from '../features/auth/authSlice';
import { useGetProfileImageQuery } from '../services/recipesApi';
import { fetchSession, fetchFavoriteRecipes  } from '../db';
import { setFavoriteRecipes } from '../features/favs/favsSlice';

const MainNavigator = () => {
  const { user, localId } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetProfileImageQuery(localId);

  useEffect(() => {
    console.log(data);
    if (data) {
      dispatch(setCameraImage(data.image));
    }
  }, [data]);

  useEffect(() => {
    (async () => {
      try {
        const session = await fetchSession();
        console.log('Esta es la sesión', session);
        if (session.rows.length) {
          console.log(session.rows._array[0]);
          const user = session.rows._array[0];
          dispatch(setUser(user));

          const favoriteRecipes = await fetchFavoriteRecipes({ localId }); 
          dispatch(setFavoriteRecipes(favoriteRecipes.rows._array)); 
      
        }
      } catch (error) {
        console.log('Error al obtener usuario', error.message);
      }
    })();
  }, []);

  return user ? <BottomTabNavigator /> : <AuthStackNavigator />;
};

export default MainNavigator;
