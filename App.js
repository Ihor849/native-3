// import { useFonts } from "expo-font";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View } from 'react-native';
import RegistrationScreen from './component/RegistrationScreen';
import Home from './component/Home/home';
import LoginScreen from "./component/LoginScreen";





export default function App() {
  const Stack = createNativeStackNavigator();
  return (
  
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">

        <Stack.Screen   name="Login" options={{headerShown: false,}} component={LoginScreen}/>

        <Stack.Screen   name="Registration" options={{headerShown: false,}} component={RegistrationScreen}/>
        <Stack.Screen   name="Home" options={{headerShown: false,}} component={Home}/>
        
            </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

