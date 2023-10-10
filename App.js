import { Provider } from 'react-redux';
import  store  from './src/store';
import fonts from './src/global/fonts';
import { useFonts } from 'expo-font';
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from './src/navigation/MainNavigator';


export default function App() {
  const [fontsLoaded] = useFonts(fonts)
  

  if (!fontsLoaded) {
    return null
  }

   return (
    <Provider  store={store}>
      <NavigationContainer>
        <MainNavigator/>
      </NavigationContainer>
    </Provider>
   )
}