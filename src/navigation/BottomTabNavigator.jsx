import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FavsNavigator from "./FavsNavigator";
import StackNavigator from "./StackNavigator";
import { colors } from "../constants/colors";
import fonts from "../global/fonts";
import { StyleSheet } from 'react-native'
import { FontAwesome, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import ProfileNavigator from "./ProfileNavigator";
import { clearUser } from '../features/auth/authSlice'
import { deleteSession } from '../db'
import { useDispatch } from 'react-redux'




const BottomTab=createBottomTabNavigator()


function BottomTabNavigator () {
  const dispatch = useDispatch()
  const logout = () => {
    dispatch(clearUser())
    deleteSession()
  }
    return (
        <BottomTab.Navigator initialRouteName="Inicio" 
        screenOptions={{
            tabBarStyle: styles.tabBar,
            tabBarLabelStyle: styles.tabBarLabel

        }}>
            <BottomTab.Screen name="Inicio" component={StackNavigator} options={{headerShown: false,
            tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons name="home" size={24} color={focused? colors.secondary : "white" } />
            )
            }} />
            <BottomTab.Screen name="Favs" component={FavsNavigator} options={{
              headerShown: true,
              headerStyle: {
                        backgroundColor: colors.primary,
                    },
                    headerTitleStyle: {
                      color: 'white',
                      textAlign: 'center',
                      fontSize: 22,
                      fontFamily: "LatoBold"
                    },
                    tabBarIcon: ({focused}) => (
                      <MaterialCommunityIcons name="heart" size={24} color={focused? colors.secondary : "white" }/>
                      )
                    
            }} />
             <BottomTab.Screen name="Perfil" component={ProfileNavigator} options={{
              headerShown: true,
              headerRight: () => <Feather name="log-out" size={24} color="white" onPress={logout} />,

              headerStyle: {
                        backgroundColor: colors.primary,
                    },
                    headerTitleStyle: {
                      color: 'white',
                      textAlign: 'center',
                      fontSize: 22,
                      fontFamily: "LatoBold"
                    },
                    tabBarIcon: ({focused}) => (
                      <FontAwesome name="user" size={24} color={focused? colors.secondary : "white" }/>
                      )
                    
            }} />
        </BottomTab.Navigator>
    );
}
export default  BottomTabNavigator;

const styles = StyleSheet.create({
  tabBar: { 

    backgroundColor: colors.quaternary,
  },
  tabBarLabel: {
    color: "white",
    fontFamily: "LatoBold",
    fontSize: 12,
 },
})
