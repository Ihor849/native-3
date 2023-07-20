// import { useFonts } from "expo-font";
import { StyleSheet, View } from 'react-native';
import RegistrationScreen from './component/RegistrationScreen';
import PostsScreen from './component/PostsScreen';
import LoginScreen from "./component/LoginScreen";


export default function App() {
  return (
    <View style={styles.container}>
      {/* <RegistrationScreen/> */}
      <PostsScreen/>
      {/* <LoginScreen/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

