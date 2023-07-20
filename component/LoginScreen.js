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

import { styles as regStyles } from "./RegistrationScreen";
import BackgroundImage from "../assets/image/BackgroundImage.png";
// import User from "../assets/image/test.png";

const LoginScreen = () => {
  return (
    <ImageBackground 
    style={regStyles.background}
     source={BackgroundImage}>
      <StatusBar style="auto" />
      <View
        style={{
          ...regStyles.main,
          
        }}
      >
        <Text
          style={{
            ...regStyles.title,
          }}
        >
          Увійти
        </Text>
        <View style={regStyles.form}>
          <KeyboardAvoidingView
            style={regStyles.inputs}
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <TextInput
              style={regStyles.input}
              name="email"
              placeholder="Адреса електронної пошти"
              placeholderTextColor="#bdbdbd"
            />
            <View style={regStyles.inputWrapp}>
              <TextInput
                style={regStyles.input}
                name="password"
                placeholder="Пароль"
                placeholderTextColor="#bdbdbd"
              />
              <TouchableOpacity style={regStyles.showPassword}>
                <Text style={regStyles.textShow}>Показати</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>

          <View style={regStyles.btnWrapp}>
            <TouchableOpacity
              style={regStyles.alreadyHaveAccount}
            >
              <Text style={regStyles.alreadyHaveAccountText}>
                Немає акаунту? Зареєструватися
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={regStyles.regBtn}>
              <Text style={regStyles.regBtn__text}>Увійти</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style = {{...regStyles.homeIndicator}} ></View>
      </View>
    </ImageBackground>
  );
};
export default LoginScreen;

export const styles = StyleSheet.create({
  
});
