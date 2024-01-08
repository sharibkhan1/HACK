import { View, Text, Image, Pressable, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox"
import Button from '../Welcome/Buttons.tsx';
import Welcome from './Welcome/Welcome.tsx';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';
const Signup = ({ navigation }) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    return (
        <LinearGradient
           style={{
                  flex: 1
                 }}
                 colors={['#E4D5C7', '#247158']}
                        >
                        <LottieView
                        source={require('../assets/Animation - 1704652756931.json')} // Update with your animation path
                        autoPlay
                        loop
                        style={{
                        height: 200, // Adjust the height based on your animation size
                        marginBottom: 0, // Adjust as needed
                        }}
                        />
            <View style={{ flex: 1, marginHorizontal: 22 }}>
                <View style={{ marginVertical: 5 }}>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: 'bold',
                        marginVertical: 10,
                        color: "black",
                    }}>
                        Create Account
                    </Text>

                    <Text style={{
                        fontSize: 16,
                        color: "black",
                    }}>Connect with your friend today!</Text>
                </View>

                <View style={{ marginBottom: 8 ,color: "black",}}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 10,
                        color:'black',
                    }}>Email address</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor:  "black",
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22,

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

                <View style={{ marginBottom: 8 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 5,
                        color: "black",
                    }}>Mobile Number</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor:  "black",
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='+91'
                            placeholderTextColor= "black"
                            keyboardType='numeric'
                            style={{
                                width: "12%",
                                borderRightWidth: 1,
                                borderLeftColor: "grey",
                                height: "100%"
                            }}
                        />

                        <TextInput
                            placeholder='Enter your phone number'
                            placeholderTextColor= "black"
                            keyboardType='numeric'
                            style={{
                                width: "80%",
                                color: "black",
                            }}
                        />
                    </View>
                </View>

                <View style={{ marginBottom: 5 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 5,
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
                                                                                            source={require('../assets/48980-200.png')} // Update with the path to your eye-off image
                                                                                            style={{
                                                                                                height: 24,
                                                                                                width: 24,
                                                                                                tintColor: "black",
                                                                                            }}
                                                                                        />
                                                                    ) : (
                                                                        <Image
                                                                                            source={require('../assets/1339644-200-removebg-preview.png')} // Update with the path to your eye-off image
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
                    marginVertical: 5
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
                    title="Sign Up"
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
                    <Text style={{ fontSize: 14 }}>Or Sign up with</Text>
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
                            source={require("../assets/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13-removebg-preview.png")}
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
                            source={require("../assets/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13-removebg-preview.png")}
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
                    marginVertical: 14
                }}>
                    <Text style={{ fontSize: 16, color: "black" }}>Already have an account</Text>
                    <Pressable
                         onPress={() => navigation.navigate("Welcome", { modalType: 'doctor', showModal: true })}
                        >

                        <Text style={{
                            fontSize: 16,
                            color:"purple",
                            fontWeight: "bold",
                            marginLeft: 6
                        }}>Login</Text>
                    </Pressable>
                </View>
            </View>
        </LinearGradient>
    )
}

export default Signup


