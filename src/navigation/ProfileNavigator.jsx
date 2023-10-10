import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProfileScreen } from "../screens";

const ProfileStack = createNativeStackNavigator();
function ProfileNavigator() {
  return (
      <ProfileStack.Navigator
        initialRouteName="ProfileScreen"
        screenOptions={() => ({
          headerShown: false,
        })}
      >
        <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} />
      </ProfileStack.Navigator>
  );
}

export default ProfileNavigator;