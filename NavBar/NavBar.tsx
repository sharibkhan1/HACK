
import React, {useRef,useEffect} from 'react';
import {Animated, View, Text, Button ,StyleSheet,Image,TouchableOpacity} from 'react-native';
import Welcome from '../Welcome/Welcome.tsx';
import { NavigationContainer ,useNavigation, getFocusedRouteNameFromRoute} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreen from '../OnboardingScreen';
import Home from '../AppPages/Home.tsx';
import Login from '../Login/Login.tsx';
import Signup from '../Login/Signup.tsx';
import LoginP from'../Login/LoginP.tsx';
import SignupP from '../Login/SignupP.tsx';
import DHome from'../DocApp/DHome.tsx';
import PHome from '../PatApp/PHome.tsx';
import PMap from '../PatApp/PMap.tsx';
import P3 from '../PatApp/P3.tsx';
import P4 from '../PatApp/P4.tsx';
//import P5 from '../PatApp/P5.tsx';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import * as Animatable from 'react-native-animatable';

// route:home ,label=home , type=Ionicons ,activeIcon:grid, inact:grid-outline
//compo=ColorScreen
const TabArr=[
    {route:'PHome',label:'Home' ,type:Ionicons,icon:'home',component:PHome,color:'green',alphaClr:'brown'},
    {route:'PMap',label:'Map',type:Ionicons,icon:'person',component:PMap,color:"blue",alphaClr:'black'},
    {route:'P3',label:'P3' ,type:Ionicons,icon:'location',component:P3,color:'red',alphaClr:'grey'},
    {route:'P4',label:'P4' ,type:Ionicons,icon:'chatbubbles',component:P4,color:'purple',alphaClr:'pink'},
    //{route:'P5',label:'P5' ,type:Ionicons,icon:'list-circle',component:P5,color:'yellow',alphaClr:'brown'},

];
const Tab = createBottomTabNavigator();

const TabButton=(props)=>{
const {item,onPress,accessibilityState}=props;
const focused=accessibilityState.selected;
const viewRef = useRef(null);
const textViewRef = useRef(null);

useEffect(() => {
  if (focused) {
    viewRef.current.animate({ 0: { scale: 0.5, }, 0.9: { scale: 1 ,} });
    textViewRef.current.animate({ 0: { scale: 1 }, 1: { scale: 0.9 } });
  } else {
    viewRef.current.animate({ 0: { scale: 0.9 ,}, 1: { scale: 0 ,} });
    textViewRef.current.animate({ 0: { scale: 0.5 }, 1: { scale: 0 } });

  }
}, [focused]);


    return(
        <TouchableOpacity
        onPress={onPress}
        activeOpacity={1}
        style={[styles.container,{flex: focused ?0.8:0.5 }]}
        >
        <View>
        <Animatable.View
            ref={viewRef}
            style={[StyleSheet.absoluteFillObject,{backgroundColor:item.color,borderRadius:10,width:90,height:40}]}
        />
        <View style={[styles.btn,{backgroundColor:focused ? null : item.alphaClr}]}>
        <Ionicons size={25}type={item.type}name={item.icon} color={focused ? 'white' : 'blue'}/>
       <Animatable.View
        ref={textViewRef}
       >
        {focused && <Text
            style={{
            color:'white',paddingHorizontal:8,
            }}
        >{item.label}</Text>}
        </Animatable.View>
        </View>
        </View>
        </TouchableOpacity>
    )
}

export default function BottomTabNavigator()  {
  return (
     <Tab.Navigator
        screenOptions={{
        headerShown:false,
        tabBarStyle:{
            height:70,
            position:"absolute",
            bottom:13,
            right:10,
            left:10,
            borderRadius:16,
            //backgroundColor: 'orange',
        }
        }}
        >
     {TabArr.map((item,index)=>{
        return(
          <Tab.Screen name={item.route} component={item.component}
          options={{
                   tabBarShowLabel: false,

                //tabBarLabel:"Home",

                tabBarButton:(props)=><TabButton {...props} item={item}/>
                }}/>
                   )
                })}
        </Tab.Navigator>

  );
};
const styles= StyleSheet.create({
    container:{

        justifyContent:'center',
        alignItems:'center',
    },
    btn:{
       flexDirection:'row',
       alignItems:'center',
       padding:8,
       borderRadius:12,
       height:45,

    },

});
const Stack = createStackNavigator();
const HomeStackNavigator = () => {
  return (

      <Stack.Navigator initialRouteName="OnboardingScreen" >
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="LoginP" component={LoginP} options={{ headerShown: false }}/>
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }}/>
        <Stack.Screen name="SignupP" component={SignupP} options={{ headerShown: false }}/>
        <Stack.Screen name="DHome" component={DHome} options={{ headerShown: false }}/>
        <Stack.Screen name="PHome" component={BottomTabNavigator} options={{ headerShown: false }}/>
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }}/>
        <Stack.Screen name="PMap" component={PMap} options={{ headerShown: false }}/>
        <Stack.Screen name="P3" component={P3} options={{ headerShown: false }}/>
        <Stack.Screen name="P4" component={P4} options={{ headerShown: false }}/>





      </Stack.Navigator>

  );
};

export default HomeStackNavigator;