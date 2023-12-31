import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { AntDesign } from "@expo/vector-icons";



import BackgroundImage from "../assets/image/BackgroundImage.png";
import User from "../assets/image/test.png";

const RegistrationScreen = () => {
  return (
    <ImageBackground style={styles.background} source={BackgroundImage}>
      <StatusBar style="auto" />
      <View
        style={{
          ...styles.main,
         
        }}
      >
        <ImageBackground style={styles.photoWrapp} source={User}>
          <TouchableOpacity style={styles.plusBtn}>
            <AntDesign name="pluscircleo" size={25} style={[styles.plus]} />
          </TouchableOpacity>
        </ImageBackground>
      
        <View>
        <KeyboardAvoidingView style={styles.inputs} behavior={Platform.OS == "ios" ? "padding" : "height" } >
        <TextInput
        style={styles.input}
        name = 'login'
        placeholder="Логін"
        placeholderTextColor="#bdbdbd"

      />
      <TextInput
        style={styles.input}
        name = 'email'
        placeholder="Адреса електронної пошти"
        placeholderTextColor="#bdbdbd"

      />
      <View style = {styles.inputWrapp}>
      <TextInput
            style={styles.input}
            name = 'password'
            placeholder="Пароль"
            placeholderTextColor="#bdbdbd"
          />

      </View>
      
        </KeyboardAvoidingView>
        <View style={styles.btnWrapp}>
            <TouchableOpacity
              style={styles.alreadyHaveAccount}
            >
              <Text style={styles.alreadyHaveAccountText}>
                Вже є акаунт? Увійти
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.regBtn}>
              <Text style={styles.regBtn__text}>Зареєструватися</Text>
            </TouchableOpacity>
          </View>

        </View>
        <View style = {{...styles.homeIndicator}} ></View>
      </View>
    </ImageBackground>
  );
};
export default RegistrationScreen;

export const styles = StyleSheet.create({
  background: {
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    resizeMode: "cover",
    width: "100%",
    height: "100%",

    justifyContent: "flex-end",
  },
  main: {
    position: "relative",

    gap: 16,
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#fff",
    width: "100%",
    height: 500,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,

    paddingTop: 72,
    paddingBottom: 40,
    paddingHorizontal: 16,
  },
  photoWrapp: {
    position: "absolute",
    top: -60,
    transform: [{ translateX: 4 }, { translateY: 0 }],

    width: 120,
    height: 120,
    backgroundColor: "#f6f6f6",
    borderRadius: 16,
  },
  plusBtn: {
    position: "absolute",
    top: 70,
    right: -10,
  },
  plus: {
    color: "#FF6C00",
    backgroundColor: "#fff",
    borderRadius: 12,
  },
  title: {
    color: "#212121",
    fontFamily: "Roboto",
    fontSize: 30,
    fontWeight: 500,
    textAlign: "center",
  },
  inputs: {
    gap: 16,
  },
  input: {
    width: 343,
    height: 50,
    backgroundColor: "#e8e8e8",
    borderRadius: 8,
    padding: 16,
    color: "#212121",
    borderWidth: 1,
    borderColor: "#bdbdbd",
    textDecorationLine: "none",
  },

  errorMessage: {
    color: "crimson",
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: 800,
    marginHorizontal: 20,
  },
  alreadyHaveAccount: {
    padding: 2,
    textAlign: "center",
  },
  alreadyHaveAccountText: {
    color: "#1B4371",
    fontFamily: "Roboto",
    fontSize: 16,
    textAlign: "center",
  },
  form: {
    flex: 2,
    flexDirection: "column",
    gap: 16,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  btnWrapp: {
    flex: 1,
    flexDirection: "column-reverse",
    gap: 16,
    ...Platform.select({
      ios: {},
      android: {},
    }),
  },
  regBtn: {
    backgroundColor: "#FF6C00",
    height: 51,
    width: 343,
    borderRadius: 25,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  regBtn__text: {
    color: "#eee",
    fontFamily: "Roboto",
    fontSize: 16,
    textAlign: "center",
  },
  inputWrapp: {
    position: "relative",
  },
  showPassword: {
    position: "absolute",
    top: 15,
    right: 16,
  },
  textShow: {
    fontFamily: "Roboto",
    color: "#1B4371",
    fontSize: 16,
  },
  homeIndicator: {
    position: "absolute",
    bottom: 10,
    width: 134,
    height: 5,
    borderRadius: 5,
    backgroundColor: "#212121",
  },
  custom: {
    backgroundColor: "#ff2",
  },
});
