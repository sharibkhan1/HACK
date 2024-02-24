import LinearGradient from 'react-native-linear-gradient';
import ClipPathView from 'react-native-clip-path';
import React, { useState, useRef, useEffect } from "react";
import { View, Text, Pressable ,Image,TouchableOpacity, Modal,TextInput,StyleSheet } from "react-native";
import Button from "../Welcome/Buttons.tsx";
import Login from '../Login/Login.tsx';
import Signup from '../Login/Signup.tsx';
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';


const Welcome = ({ route }) => {
const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
   const [modalType, setModalType] = useState('');
const modalRef = useRef();

 const openModal = (type) => {
    setModalType(type);
    setModalVisible(true);
  };


   useEffect(() => {
       console.log("Route params:", route.params);
       console.log("Modal type:", modalType);
       console.log("Modal visible:", modalVisible);
       if (route.params && route.params.showModal) {
           openModal(route.params.modalType);
       }
   }, [route.params]);



    useEffect(() => {
    console.log("Route params:", route.params);
       console.log("Modal type:", modalType);
       console.log("Modal visible:", modalVisible);
      if (modalVisible) {
        modalRef.current.fadeIn();
      }
    }, [modalVisible]);

  const closeModal = () => {
      modalRef.current.fadeOut(); // Trigger the fadeOut animation when closing the modal
      setTimeout(() => {
        setModalVisible(false);
      }, 300); // Adjust the delay to match the duration of the fadeOut animation
    };

    return (
        <LinearGradient
            style={{
                flex: 1
            }}
            colors={['#E4D5C7', '#247158']}
        >
            <View style={{ flex: 1 }}>
                <View>
                    <Image
                        source={require("../assets/MDoc.png")}
                        style={{
                            height: 300,
                            width: 300,
                            borderRadius: 20,
                            position: "absolute",
                            top: 0,
                            transform: [
                                { translateX: 0 },
                                { translateY: 100 },
                                { rotate: "-15deg" }
                            ]
                        }}
                    />

                    <Image
                        source={require("../assets/Phone3.png")}
                        style={{
                            height: 200,
                            width: 200,
                            borderRadius: 20,
                            position: "absolute",
                            top: 10,
                            left: 100,
                            transform: [
                                { translateX: 50 },
                                { translateY: 20 },
                                { rotate: "-5deg" }
                            ]
                        }}
                    />

                    <Image
                        source={require("../assets/Phone2.png")}
                        style={{
                            width: 150,
                            height: 150,
                            borderRadius: 20,
                            position: "absolute",
                            top: 130,
                            left: -50,
                            transform: [
                                { translateX: 30 },
                                { translateY: 100 },
                                { rotate: "15deg" }
                            ]
                        }}
                    />

                    <Image
                        source={require("../assets/Fdoc.png")}
                        style={{
                            height: 300,
                            width: 300,
                            borderRadius: 20,
                            position: "absolute",
                            top: 110,
                            left: 100,
                            transform: [
                                { translateX: 50 },
                                { translateY: 50 },
                                { rotate: "4deg" }
                            ]
                        }}
                    />
                </View>

                {/* content  */}

                <View style={{
                    paddingHorizontal: 22,
                    position: "absolute",
                    top: 400,
                    width: "100%"
                }}>
                    <Text style={{
                        fontSize: 50,
                        fontWeight: 800,
                         color: "white",
                    }}>Let's Get</Text>
                    <Text style={{
                        fontSize: 46,
                        fontWeight: 800,
                        color: "white",
                    }}>Started</Text>

                    <View style={{ marginVertical: 22 }}>
                        <Text style={{
                            fontSize: 16,
                             color: "white",
                            marginVertical: 4
                        }}>Connect with each other with chatting</Text>
                        <Text style={{
                            fontSize: 16,
                             color: "white",
                        }}>Calling, Enjoy Safe and private texting</Text>
                    </View>

                      <Button
                                title="Sign Up"
                                onPress={() => navigation.navigate("Signup")}
                                style={{
                                  marginTop: 22,
                                  width: "100%",
                                }}
                              />
                    <View style={{
                        flexDirection: "row",
                        marginTop: 10,
                        justifyContent: "center"
                    }}>
                    <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Login")}>
                    <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    </View>
                </View>

            </View>
        </LinearGradient>
    )
}

export default Welcome;
const styles = StyleSheet.create({

 textInput:{
    height:50,
    borderWidth:2,
    borderColor:'rgba(0,0,0,0.2)',
    marginVertical:10,
    marginHorizontal:0,
    borderRadius:25,
    paddingLeft:10,
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
   button: {
       marginTop: 20,
       width: "100%",
       backgroundColor: "transparent",
       borderColor: "white",
       borderWidth: 2,
       borderRadius: 12,
       paddingVertical: 13,
       alignItems: 'center',

     },
     buttonText: {
       color: 'white',
       fontSize: 16,
       fontWeight: 'bold',
     },

});