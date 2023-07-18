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

import BackgroundImage from "../assets/image/BackgroundImage.png";
import User from "../assets/image/test.png";r

const ProfileScreen = () => {
  return (
    <View>
      <ImageBackground style = {[ styles.background]} source={BackgroundImage}>
      <StatusBar style="auto" /> 
      </ImageBackground>
    </View>
  );
};

export default ProfileScreen;

export const styles = StyleSheet.create({
  background: {
    gap: 160,
    backgroundSize: "auto",
    alignItems: "center",
    justifyContent: "space-between",
  },
  main: {
    width: "100%",

    backgroundColor: "#f5f5f5",
    marginTop: 140,
    paddingBottom: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 90,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  contentContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  trayArrowBtn: {
    position: "absolute",
    right: 16,
    top: 16,
  },
  trayArrow: {
    transform: [{ rotate: "90deg" }],
    color: "#bdbdbd",
  },
  cardDescription: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 24,
  },
  wrapp1: {
    flex: 1,
  },
  wrapp2: {
    flex: 2,
  },
  wrapp3: {
    flex: 5,
    flexDirection: "row-reverse",
  },

  flexWrapp: {
    position: "absolute",
    right: 0,
  },

  footer: {
    position: "absolute",
    bottom: 0,
  },
});
