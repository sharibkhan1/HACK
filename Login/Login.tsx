                             import { View, Text, Image, Pressable, TextInput, TouchableOpacity } from 'react-native'
                             import React, { useState } from 'react'
                             import { SafeAreaView } from "react-native-safe-area-context";
                             import { Ionicons } from "@expo/vector-icons";
                             import Checkbox from "expo-checkbox"
                             import Button from '../Welcome/Buttons.tsx';
                             import LinearGradient from 'react-native-linear-gradient';
                             import Welcome from './Welcome/Welcome.tsx';
                             import Signup from '../Login/Signup.tsx';
                             import Home from '../PAGES/Home.tsx';

                             const SignupP = ({ navigation }) => {
                                 const [isPasswordShown, setIsPasswordShown] = useState(false);
                                 const [isChecked, setIsChecked] = useState(false);
                                 return (
                                     <LinearGradient
                                                         style={{
                                                             flex: 1
                                                         }}
                                                         colors={['#E4D5C7', '#247158']}
                                                     >
                                         <View style={{ flex: 1, marginHorizontal: 22 }}>
                                             <View style={{ marginVertical: 22 }}>
                                                 <Text style={{
                                                     fontSize: 22,
                                                     fontWeight: 'bold',
                                                     marginVertical: 12,
                                                     color: "black",
                                                 }}>
                                                     Login
                                                 </Text>

                                                 <Text style={{
                                                     fontSize: 16,
                                                     color: "black",
                                                 }}>Connect with your friend today!</Text>
                                             </View>

                                             <View style={{ marginBottom: 12 ,color: "black",}}>
                                                 <Text style={{
                                                     fontSize: 16,
                                                     fontWeight: 400,
                                                     marginVertical: 8,
                                                     color:"black"
                                                 }}>Email address</Text>

                                                 <View style={{
                                                     width: "100%",
                                                     height: 48,
                                                     borderColor:  "black",
                                                     borderWidth: 1,
                                                     borderRadius: 8,
                                                     alignItems: "center",
                                                     justifyContent: "center",
                                                     paddingLeft: 22
                                                 }}>
                                                     <TextInput
                                                         placeholder='Enter your email address'
                                                         placeholderTextColor={ "black"}
                                                         keyboardType='email-address'
                                                         style={{
                                                             width: "100%"
                                                         }}
                                                     />
                                                 </View>
                                             </View>

                                             <View style={{ marginBottom: 12 }}>
                                                 <Text style={{
                                                     fontSize: 16,
                                                     fontWeight: 400,
                                                     marginVertical: 8,
                                                     color: "black",
                                                 }}>Password</Text>

                                                 <View style={{
                                                     width: "100%",
                                                     height: 48,
                                                     borderColor:  "black",
                                                     borderWidth: 1,
                                                     borderRadius: 8,
                                                     alignItems: "center",
                                                     justifyContent: "center",
                                                     paddingLeft: 22
                                                 }}>
                                                     <TextInput
                                                         placeholder='Enter your password'
                                                         placeholderTextColor= "black"
                                                         secureTextEntry={isPasswordShown}
                                                         style={{
                                                             width: "100%"
                                                         }}
                                                     />

                                                     <TouchableOpacity
                                                         onPress={() => setIsPasswordShown(!isPasswordShown)}
                                                         style={{
                                                             position: "absolute",
                                                             right: 12
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
                                                 marginVertical: 6
                                             }}>
                                                 <Checkbox
                                                     style={{ marginRight: 8 }}
                                                     value={isChecked}
                                                     onValueChange={setIsChecked}
                                                     color={isChecked ? "green" : undefined}
                                                 />

                                                 <Text style={{color: "black",}}>I aggree to the terms and conditions</Text>
                                             </View>

                                             <Button
                                                 onPress={()=>navigation.navigate("Home")}
                                                 title="Login"
                                                 filled
                                                 style={{
                                                     marginTop: 18,
                                                     marginBottom: 4,
                                                 }}
                                             />

                                             <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
                                                 <View
                                                     style={{
                                                         flex: 1,
                                                         height: 1,
                                                         backgroundColor:" grey",
                                                         marginHorizontal: 10
                                                     }}
                                                 />
                                                 <Text style={{ fontSize: 14 }}>Or Login with</Text>
                                                 <View
                                                     style={{
                                                         flex: 1,
                                                         height: 1,
                                                          backgroundColor:" grey",
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
                                                          backgroundColor:" grey",
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

                                                     <Text>Facebook</Text>
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
                                                         borderColor: "black",
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

                                                     <Text style={{color:"black"}}>Google</Text>
                                                 </TouchableOpacity>
                                             </View>

                                             <View style={{
                                                 flexDirection: "row",
                                                 justifyContent: "center",
                                                 marginVertical: 22
                                             }}>
                                                 <Text style={{ fontSize: 16, color: "black" }}>Make a new account </Text>
                                                 <Pressable
                                                     onPress={() => navigation.navigate("Signup")}
                                                 >
                                                     <Text style={{
                                                         fontSize: 16,
                                                         color:"purple",
                                                         fontWeight: "bold",
                                                         marginLeft: 6
                                                     }}>Sign Up</Text>
                                                 </Pressable>
                                             </View>
                                         </View>
                                     </LinearGradient>
                                 )
                             }

                             export default SignupP


