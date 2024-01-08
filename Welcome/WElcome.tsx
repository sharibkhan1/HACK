import LinearGradient from 'react-native-linear-gradient';
import ClipPathView from 'react-native-clip-path';
import React, { useState, useRef, useEffect } from "react";
import { View, Text, Pressable, Image,TouchableOpacity, Modal,TextInput,StyleSheet } from "react-native";
import Button from "../Welcome/Buttons.tsx";
import Login from '../Login/Login.tsx';
import Signup from '../Login/Signup.tsx';
import {useNavigation} from '@react-navigation/native';
import LoginP from'../Login/LoginP.tsx';
import SignupP from '../Login/SignupP.tsx';
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
                        source={require("../assets/09eccaf4e2b707127ffffa950b4c8e88-removebg-preview.png")}
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
                        source={require("../assets/f25cc7e38c4f0b140a2885c7190e75cd-removebg-preview.png")}
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
                        source={require("../assets/efa2cf467e5daf25376cefb5f4a7b039-removebg-preview.png")}
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
                        source={require("../assets/7c3b2108b4e879150933bf612879937e-removebg-preview.png")}
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
                                title="Join As Doctor"
                                onPress={() => openModal("doctor")}
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
                    <Button
                                  title="Join As Patient"
                                  onPress={() => openModal("patient")}
                                  style={{
                                    marginTop: 22,
                                    width: "100%"
                                  }}
                                />


                    </View>
                </View>
                <Modal
                          animationType="slide"
                          transparent={true}
                          visible={modalVisible}
                          onRequestClose={closeModal}
                        >
                        <View style={{
                                    flex: 1,
                                    justifyContent: "flex-end",

                                  }}>
                                    <TouchableOpacity
                                      style={{ flex: 1 }}
                                      onPress={closeModal}
                                    />
                                   <Animatable.View
                                                 ref={modalRef}
                                                 animation="fadeIn" // Initial animation when the modal is first displayed
                                                 duration={600}
                                                 style={{
                                                   backgroundColor: modalType === 'doctor' ? 'white' : '#E4D5C7',
                                                   borderTopLeftRadius: 20,
                                                   borderTopRightRadius: 20,
                                                   padding: 30,
                                                   height: modalType==='doctor' ? '70%' : '60%',
                                                 }}
                                               >

                                    <View >


                              {/* Your modal content */}
                              {modalType === "doctor" ? (
                                     <Login modalRef={modalRef}/>
                                    ) : (
                                    <LoginP modalRef={modalRef}/>
                                    )}
                          </View>
                          </Animatable.View>
                          </View>
                        </Modal>
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

});