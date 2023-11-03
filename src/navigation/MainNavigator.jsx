import React, { useEffect } from 'react';
import AuthStackNavigator from './AuthStackNavigator';
import BottomTabNavigator from './BottomTabNavigator';
import { useDispatch, useSelector } from 'react-redux';
import { setCameraImage, setUser } from '../features/auth/authSlice';
import { useGetProfileImageQuery } from '../services/recipesApi';
import { fetchSession } from '../db';

const MainNavigator = () => {
  const { user, localId } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const { data } = useGetProfileImageQuery(localId);




  useEffect(() => {
    if (data) {
      dispatch(setCameraImage(data.image));
    }
  }, [data]);

  useEffect(() => {
    (async () => {
      try {
        const session = await fetchSession();
        console.log('Esta es la sesion', session);
        if (session.rows.length) {
          console.log(session.rows._array[0]);
          const user = session.rows._array[0];
          dispatch(setUser(user));
        }
      } catch (error) {
        console.log('Error al obtener usuario', error.message);
      }
    })();
  }, []);


 
  
  return user ? <BottomTabNavigator /> : <AuthStackNavigator />;
};

export default MainNavigator;
