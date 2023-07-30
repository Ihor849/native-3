import {
    Text,
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    Keyboard,
    FlatList
} from "react-native";
import { StatusBar } from 'expo-status-bar';
import { styles as regStyles } from "../RegistrationScreen";
import { styles as postStyles } from "../PostsScreen/PostsScreen";
import { styles as creStyles} from "../CreatePostsScreen/CreatePostsScreen";
import { AntDesign } from '@expo/vector-icons'; 
import AvImage0 from "../../assets/image/userAv.png";
import { useNavigation } from "@react-navigation/native";
import { dataComments } from "../../utils/dataStorage";

import {useState } from "react";







const CommentsScreen =({route}) => {
    const {postId, photo} = route.params;

    const navigation = useNavigation();
    const [comment, setComment] = useState('')
    const [allComments, setAllComments] = useState(dataComments)
    const [isValidComment, setIsValidComment] = useState(false)
    const [message, setMessage] = useState('');
  

    const validateComment = (value) => {
        setComment(value)
        if(!value){
            setIsValidComment(false)
        }
        else {
            setIsValidComment(true);
            setMessage('')
          }
    }

    const createComment = async () => {
        if(!isValidComment){
            setMessage('Comment shouldn`t be blank')
            return
          }
          validateComment()

        await addDoc(collection(db, `posts/${postId}/comments`), {
            comment: comment,
            userName: login,
            timestamp: serverTimestamp()
          });
                
          Keyboard.dismiss()

        };


    return (
        <View style = {[regStyles.background, postStyles.background]}>
        <StatusBar style="auto" />

        <View style = {[creStyles.postsCreate, styles.container]}>
        <View style={postStyles.titleWrapp}>
            <Text 
            style={[postStyles.title]}>
            Коментарі
            </Text>
            <TouchableOpacity 
            onPress={() => navigation.navigate("Posts")}
            style={creStyles.arrowleftBtn}>
            <AntDesign style = {[creStyles.arrowleft]} name="arrowleft" size={24} />
            </TouchableOpacity>
        </View>

        <View  style={[ styles.main]}>
            <View style = {[styles.photoWrapp]}>
            <ImageBackground style = {postStyles.photoFrame} source={{uri: photo}}>     
            </ImageBackground>    
            </View>

            {allComments && 
            <FlatList style ={{marginBottom:20, ...styles.commentsWrapp }}
                data={allComments} keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (

            <View key={item.id} style = {styles.comment}>
            <ImageBackground style = {styles.avatar} source={AvImage0} size = {28}></ImageBackground>   
            <View style = {[styles.card]}>
                <Text
             
                 style = {[styles.commentText]}>{item.comment}</Text>
                <Text style = {styles.createdAt}>
                 {item.data}
                </Text>
                <TouchableOpacity
                    onPress={() => {
                    setShowConfirm(true)  }}
                  style={[ styles.deleteBtn]}>
                 <AntDesign 
                   style={[styles.icoDelete]}
                   name="delete" size={16} color="#bdbdbd" />
            </TouchableOpacity>
            </View> 
            </View> 

                  )} />  }
        </View>

                      
        {message ?  <Text style={{...regStyles.errorMessage, }}>{message}</Text>         
                 :  null}

        <View style = {[styles.commemtBar]} >
           <TextInput
                style={[styles.commemtInput]}
                name = 'comment'
                value={comment}
                onChangeText={validateComment}
                placeholder="Коментувати..."
                placeholderTextColor="#bdbdbd"
                    />
            <TouchableOpacity
            onPress={createComment}
            style={styles.sendBtn}>
            <AntDesign style = {styles.arrowup} name="arrowleft" size={18} />
           </TouchableOpacity>

           </View>
      
        </View>
        </View>
        
    )
}
export default CommentsScreen

const styles = StyleSheet.create({

    container: {
        gap: 12,

      },
    contentContainer: {
        alignItems: 'center',
      },

    main: {     
        flex: 1,   
        gap: 32,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 16,
    },

    photoWrapp: {
        width: 343,
        flexDirection: 'column',
        gap: 8,
        marginBottom:20,
    },

    commentsWrapp: {
        flexDirection: 'column',
        gap:24,
    },
    comment: {
        flexDirection: 'row',
        gap: 8,
    },
    avatar: {
        width:28,
        height: 28,
        backgroundColor: '#bdbdbd',
        borderRadius: 14,
    },
    card: {
        width: 300,
        padding: 16,
        flexDirection: 'column',
        gap: 8,
        backgroundColor: '#f7f7f7',
        marginBottom:20,
   
        borderTopLeftRadius: 0,
        borderTopRightRadius: 6,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
        
    },
    commentText: {
        color: '#212121',
        fontFamily: 'Roboto',
        fontSize: 13,
        fontWeight: 400,
    },
    createdAt: {
        color: '#bdbdbd',
        fontFamily: 'Roboto',
        fontSize: 10,
        fontWeight: 500,
        // alignSelf: 'flex-end',
    },
    text: {
        color: '#bdbdbd',
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: 500,
    },
    deleteBtn: {
        position: 'absolute',
        right: 12,
        bottom: 12,
        // fontSize: 16,
        // fontWeight: 500,
    },
    commemtBar: {
        position: 'relative',
  
        width: 343,
        height: 50,
        marginBottom:20,
        // marginTop: -10,
    
    },
    commemtInput: {
        flex: 1,
        paddingLeft: 16,
        paddingRight: 50,
        backgroundColor: '#f6f6f6',
        borderRadius: 25,
        borderWidth: 1,
        borderColor: "#bdbdbd",

    },
    sendBtn: {
        position: 'absolute',
        right: 8,
        top: 8,
        width:34,
        height: 34,
        backgroundColor: '#ff6c00',
        borderRadius: 17,
        alignItems: 'center',
        justifyContent: "center",

    },
    arrowup: {
        transform: [{ rotate: '90deg' }],
        color: '#bdbdbd',
    },

})