// LoginP.tsx
import DHome from'./DocApp/DHome.tsx';
import React,{ useState, useRef, useEffect } from "react";
import {  View, Text, Pressable, Image,TouchableOpacity, Modal,TextInput,StyleSheet} from "react-native";
import Button from "../Welcome/Buttons.tsx";
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import Checkbox from "expo-checkbox"

const Login = ({ modalRef }) => {
  const navigation = useNavigation();
  const [isPasswordShown, setIsPasswordShown] = useState(false);
   const [isChecked, setIsChecked] = useState(false);
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
      <View style={{ marginVertical: 10 }}>
                          <Text style={{
                              fontSize: 22,
                              fontWeight: 'bold',
                              marginVertical: 5,
                              color: "black",
                          }}>
                              Hi Welcome Back ! 👋
                          </Text>

                          <Text style={{
                              fontSize: 16,
                              color: "black",
                          }}>Hello again you have been missed!</Text>
                      </View>
        <View style={{ marginBottom: 10 }}>
                            <Text style={{
                                fontSize: 16,
                                fontWeight: 400,
                                marginVertical: 8,
                                color:"green",
                            }}>Email address</Text>

                            <View style={{
                                width: "100%",
                                height: 48,
                                borderColor: "black",
                                borderWidth: 1,
                                borderRadius: 8,
                                alignItems: "center",
                                justifyContent: "center",
                                paddingLeft: 22
                            }}>
                                <TextInput
                                    placeholder='Enter your email address'
                                    placeholderTextColor={"black"}
                                    keyboardType='email-address'
                                    style={{
                                        width: "100%",
                                        color:"black"
                                    }}
                                />
                            </View>
                        </View>
         <View style={{ marginBottom: 12 }}>
                            <Text style={{
                                fontSize: 16,
                                fontWeight: 400,
                                marginVertical: 8,
                                color:"black",
                            }}>Password</Text>

                            <View style={{
                                width: "100%",
                                height: 48,
                                borderColor: "black",
                                borderWidth: 1,
                                borderRadius: 8,
                                alignItems: "center",
                                justifyContent: "center",
                                paddingLeft: 22
                            }}>
                                <TextInput
                                    placeholder='Enter your password'
                                    placeholderTextColor={"black"}
                                    secureTextEntry={isPasswordShown}
                                    style={{
                                        width: "100%",
                                        color:"black",
                                    }}
                                />

                                <TouchableOpacity
                                    onPress={() => setIsPasswordShown(!isPasswordShown)}
                                    style={{
                                        position: "absolute",
                                        right: 12,
                                        color:"black",
                                    }}
                                >
                                    {
                                        isPasswordShown == true ? (
                                            <Image
                                                                source={require('../assets/R-eye.png')} // Update with the path to your eye-off image
                                                                style={{
                                                                    height: 24,
                                                                    width: 24,
                                                                    tintColor: "black",
                                                                }}
                                                            />
                                        ) : (
                                            <Image
                                                                source={require('../assets/Leye.png')} // Update with the path to your eye-off image
                                                                style={{
                                                                    height: 24,
                                                                    width: 24,
                                                                    tintColor: "black",
                                                                }}
                                                            />
                                        )
                                    }

                                </TouchableOpacity>
                            </View>
                        </View>
        <View style={{
                            flexDirection: 'row',
                            marginVertical: 6,
                            paddingLeft:10,
                        }}>
                            <Checkbox
                                style={{ marginRight: 20 }}
                                value={isChecked}
                                onValueChange={setIsChecked}
                                color={isChecked ? 'green' : undefined }

                            />

                            <Text style={{color:"black"}}>Remember Me</Text>
                        </View>
        <Button
                            title="Login"
                            filled
                            onPress={() => navigation.navigate("DHome")}
                            style={{
                                marginTop: 15,
                                marginBottom: 2,
                            }}
                        />

        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 15 }}>
          <View
                                  style={{
                                      flex: 1,
                                      height: 1,
                                      backgroundColor: "grey",
                                      marginHorizontal: 10
                                  }}
                              />
                              <Text style={{ fontSize: 14,color:"black" }}>Or Login with</Text>
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
              source={require("../assets/Phone3.png")}
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
 <View style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginVertical: 22
                }}>
                    <Text style={{ fontSize: 16, color: "black" }}>Don't have an account ? </Text>
                    <Pressable
                        onPress={() => navigation.navigate("Signup")}
                    >
                        <Text style={{
                            fontSize: 16,
                            color: "purple",
                            fontWeight: "bold",
                            marginLeft: 6
                        }}>Register</Text>
                    </Pressable>
                </View>

      </View>
    </View>
  );
};

export default Login;
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
        marginBottom:10,
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
