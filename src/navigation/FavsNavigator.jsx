import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Favs } from "../screens";
import { colors } from "../constants/colors";
import { fonts } from "../global/fonts";

const Stack = createNativeStackNavigator();
function FavsNavigator() {
  return (
      <Stack.Navigator
        initialRouteName="Fav"
        screenOptions={() => ({
          headerShown: false,
        })}
      >
        <Stack.Screen name="Fav" component={Favs} />
      </Stack.Navigator>
  );
}

export default FavsNavigator;
