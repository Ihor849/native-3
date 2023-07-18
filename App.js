// import { useFonts } from "expo-font";
import { StyleSheet, View } from 'react-native';
// import { StatusBar } from 'expo-status-bar';
import RegistrationScreen from './component/RegistrationScreen';
// import LoginScreen from "./components/LoginScreen/LoginScreen";
// import PostsScreen from "../components/PostsScreen/PostsScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <RegistrationScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#0f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

