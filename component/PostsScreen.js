import {
  Text,
  StyleSheet,
  Image,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  MaterialCommunityIcons,
  AntDesign,
  Feather,
  FontAwesome5,
} from "@expo/vector-icons";

import { styles as regStyles } from "./RegistrationScreen";

import User from "../assets/image/test.png";

const PostsScreen = () => {
  
  return (
    <View
      style={[
        regStyles.background,
        styles.background,
      ]}
    >
      <StatusBar style="auto" />

      <View style={[styles.postsScreen]}>
        <View style={styles.titleWrapp}>
          <Text
            style={[styles.title]}
          >
            Публікації
          </Text>
          
          <TouchableOpacity
            
            style={styles.trayArrowBtn}
          >
            <MaterialCommunityIcons
              style={styles.trayArrow}
              name="tray-arrow-up"
              size={24}
            />
          </TouchableOpacity>
        </View>

        <View
          style={[styles.main]}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.user}>
            <View style={styles.imgContainer}>
              <Image style={styles.userAvatar} source={User} />
            </View>
            <View style={styles.userWrapp}>
              <Text style={[styles.userName]}>
              Natali Romanova
              </Text>
              <Text style={[styles.userEmail]}>
              email@example.com
              </Text>
            </View>
          </View>
        </View>

        <View style={[styles.footer]}>
          <TouchableOpacity style={[styles.icon]}>
            <Feather style={styles.icon} name="grid" size={24} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.addBtn}>
            <AntDesign name="plus" size={14} color="#eee" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Feather style={styles.icon} name="user" size={24} />
          </TouchableOpacity>

          <View style={regStyles.homeIndicator}></View>
        </View>
      </View>
    </View>
  );
};
export default PostsScreen;

export const styles = StyleSheet.create({
  background: {
    paddingTop: 32,
    
  },
  contentContainer: {
    alignItems: "center",
    justifyContent: "center",
  },

  postsScreen: {
    flex: 1,
    gap: 32,
  },
  main: {


    flexDirection: "column",
    gap: 22,

    paddingLeft: 16,
    paddingRight: 16,
    alignItems: "center",
  },
  titleWrapp: {
    position: "relative",
    height: 44,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    gap: 22,
    borderBottomWidth: 1,
    borderBottomColor: "#777",
    borderBottomStyle: "solid",
  },
  title: {
    color: "#212121",
    fontFamily: "Roboto",
    fontSize: 17,
    fontWeight: 500,
    textAlign: "center",
  },
  switch: {
    position: "absolute",
    right: 50,
    bottom: 5,
    
  },
  themeBtn: {
    position: "absolute",
    left: 25,
    
  },
  themeIcon: {
  
    color: "#212121",
  },
  trayArrowBtn: {
    position: "absolute",
    right: 25,
   
  },
  trayArrow: {
    transform: [{ rotate: "90deg" }],
    color: "#bdbdbd",
  },
  user: {
    height: 60,
    width: 343,
    flexDirection: "row",
    
    gap: 12,
  },
  userWrapp: {
    height: 60,
    justifyContent: "center",
  },

  userName: {
    color: "#212121",
    fontFamily: "Roboto",
    fontSize: 13,
    fontWeight: 600,
  },
  userEmail: {
    color: "#212121",
    fontFamily: "Roboto",
    fontSize: 13,
  },
  card: {
    flex: 1,

    marginBottom: 22,
    flexDirection: "column",
    gap: 8,
  },
  photoFrame: {
    width: 343,
    height: 240,
    backgroundColor: "#f6f6f6",
    borderRadius: 8,

    alignItems: "center",
    justifyContent: "center",
  },
  cardText: {
    color: "#212121",
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: 500,
  },
  cardDescription: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  flexWrapp: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 8,
  },
  iconComment: {
    transform: [{ scaleX: -1 }],
  },
  cardComment: {
    color: "#bdbdbd",
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: 500,
  },
  cardLocation: {
    color: "#212121",
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: 500,
    textDecorationLine: "underline",
  },
  userAvatar: {
    width: 60,
    height: 60,
  },

  footer: {
    position: "absolute",
    bottom: 0,
    height: 83,
    paddingTop: 8,
    paddingBottom: 34,
    borderTopWidth: 1,
    borderTopColor: "#777",
    borderTopStyle: "solid",
    width: "100%",
    backgroundColor: "#f5f5f5",
    flexDirection: "row",
    gap: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  addBtn: {
    width: 70,
    height: 40,

    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF6C00",
    borderRadius: 20,
  },
});
