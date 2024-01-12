// LoginP.tsx

import React,{ useState, useRef, useEffect } from "react";
import {  View, Text, Pressable, Image,TouchableOpacity, Modal,TextInput,StyleSheet} from "react-native";
import Button from "../Welcome/Buttons.tsx";
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import PHome from './PatApp/PHome.tsx';

const LoginP = ({ modalRef }) => {
  const navigation = useNavigation();
  const [isPasswordShown, setIsPasswordShown] = useState(false);
const closeModal = () => {
      modalRef.current.fadeOut(); // Trigger the fadeOut animation when closing the modal
      setTimeout(() => {
        setModalVisible(false);
      }, 300); // Adjust the delay to match the duration of the fadeOut animation
    };

  return (
    <View>
      <TouchableOpacity style={styles.closeButtonContainer} onPress={closeModal}>
        <Text style={{ color: "black", fontSize: 20 }}>X</Text>
      </TouchableOpacity>

      {/* Your modal content */}
      <View style={styles.formInputContainer}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="black"
          style={styles.textInput}
        />
        <TextInput
          placeholder="FullName"
          placeholderTextColor="black"
          style={styles.textInput}
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor="black"
          style={styles.textInput}
          secureTextEntry={isPasswordShown}
        />
        <TouchableOpacity
          onPress={() => setIsPasswordShown(!isPasswordShown)}
          style={{
            position: "absolute",
            right: 15,
            top: 163,
            color: "black",
          }}
        >
          {isPasswordShown == true ? (
            <Image
              source={require('../assets/R-eye.png')}
              style={{
                height: 30,
                width: 30,
                tintColor: "black",
              }}
            />
          ) : (
            <Image
              source={require('../assets/Leye.png')}
              style={{
                height: 30,
                width: 30,
                tintColor: "black",
              }}
            />
          )}
        </TouchableOpacity>
        <Button
          title="Login"
          onPress={() => navigation.navigate("PHome")}
          filled
          style={{
            marginTop: 30,
            width: "100%",
          }}
        />
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ color: "black", paddingTop: 15, paddingLeft: 55, fontSize: 16 }}> Don't have a account:</Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignupP")}>
            <Text style={{ color: "blue", paddingLeft: 10, paddingTop: 15, fontWeight: "bold", fontSize: 16 }}>Register</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: "grey",
              marginHorizontal: 10
            }}
          />
          <Text style={{ fontSize: 14, color: "black" }}>Or Login with</Text>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: "grey",
              marginHorizontal: 10
            }}
          />
        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'center'
        }}>
          <TouchableOpacity
            onPress={() => console.log("Pressed")}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              height: 52,
              borderWidth: 1,
              borderColor: "grey",
              marginRight: 4,
              borderRadius: 10
            }}
          >
            <Image
              source={require("../assets/google.png")}
              style={{
                height: 36,
                width: 36,
                marginRight: 8
              }}
              resizeMode='contain'
            />

            <Text style={{ color: "black" }}>Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => console.log("Pressed")}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              height: 52,
              borderWidth: 1,
              borderColor: "grey",
              marginRight: 4,
              borderRadius: 10
            }}
          >
            <Image
              source={require("../assets/google.png")}
              style={{
                height: 36,
                width: 36,
                marginRight: 8
              }}
              resizeMode='contain'
            />

            <Text style={{ color: "black" }}>Google</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginP;
const styles = StyleSheet.create({

 textInput:{
    height:50,
    borderWidth:2,
    borderColor:'rgba(0,0,0,0.2)',
    marginVertical:10,
    marginHorizontal:0,
    borderRadius:25,
    paddingLeft:10,
    backgroundColor:"grey",
 },
 formInputContainer:{
        marginBottom:70,
 },
 closeButtonContainer:{
        height:40,
        width:40,
        top:10,
        justifyContent:'center',
        position: "absolute",
        alignSelf:'center',
        alignItems:'center',
        borderRadius:20,
        backgroundColor:"white",
        marginTop: -60,
   },

});
