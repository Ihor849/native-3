// import { useFonts } from "expo-font";
import { StyleSheet, View } from 'react-native';
import RegistrationScreen from './component/RegistrationScreen';
import ProfileScreen from './component/ProfileScreen';
// import LoginScreen from "./component/LoginScreen";


export default function App() {
  return (
    <View style={styles.container}>
      {/* <RegistrationScreen/> */}
      <ProfileScreen/>
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

