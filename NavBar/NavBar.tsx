import React, {useRef,useEffect} from 'react';
import {Animated, View, Text, Button ,StyleSheet,Image,TouchableOpacity} from 'react-native';
import Welcome from '../Welcome/Welcome.tsx';
import { NavigationContainer ,useNavigation, getFocusedRouteNameFromRoute} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreen from '../OnboardingScreen';
import Signup from '../Login/Signup.tsx';
import Login from '../Login/Login.tsx';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import * as Animatable from 'react-native-animatable';
import Home from '../PAGES/Home.tsx';
import Personal from '../PAGES/Personal.tsx';
import Chat from '../PAGES/Chat.tsx';
import Activity from '../PAGES/Activity.tsx';
import EditProfile from '../PROFILE/EditProfile.tsx';
import ProfileP from '../PROFILE/ProfileP.tsx';

const TabArr=[
    {route:'Home',label:'Home' ,type:Ionicons,icon:'home',component:Home,color:'#51604F',alphaClr:'#E9EAEC'},
    {route:'Chat',label:'Chat',type:Ionicons,icon:'calendar',component:Chat,color:"#51604F",alphaClr:'#E9EAEC'},
    {route:'Activity',label:'Activity' ,type:Ionicons,icon:'location',component:Activity,color:'#51604F',alphaClr:'#E9EAEC'},
    {route:'Personal',label:'Personal' ,type:Ionicons,icon:'chatbubbles',component:Personal,color:'#51604F',alphaClr:'#E9EAEC'},
];
const Tab = createBottomTabNavigator();

const TabButton = ({ item, onPress, accessibilityState }) => {
    const focused = accessibilityState.selected;


return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={1}
            style={[styles.container, { flex: focused ? 0.8 : 0.5 }]}
        >
            <View>
                <View style={[styles.btn, { backgroundColor: focused ? item.color : item.alphaClr }]}>
                    <Ionicons size={25} type={item.type} name={item.icon} color={focused ? '#E9EAEC' : '#51604F'} />
                    {focused && <Text style={{ color: 'white', paddingHorizontal: 8 }}>{item.label}</Text>}
                </View>
            </View>
        </TouchableOpacity>
    );
};

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
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={BottomTabNavigator} options={{ headerShown: false }}/>
        <Stack.Screen name="Personal" component={Personal} options={{ headerShown: false }}/>
        <Stack.Screen name="Chat" component={Chat} options={{ headerShown: false }}/>
        <Stack.Screen name="Activity" component={Activity} options={{ headerShown: false }}/>
        <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }}/>
        <Stack.Screen name="ProfileP" component={ProfileP} options={{ headerShown: false }}/>
     </Stack.Navigator>
  );
};

export default HomeStackNavigator;