import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Signup, Login } from "../screens";


const AuthStack = createNativeStackNavigator()
function AuthStackNavigator() {
    return (
            <AuthStack.Navigator initialRouteName="Signup" >
                <AuthStack.Screen name="Signup" component={Signup} />
                <AuthStack.Screen name="Login" component={Login} />
            </AuthStack.Navigator>
    )
}

export default AuthStackNavigator 