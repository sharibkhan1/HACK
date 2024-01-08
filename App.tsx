// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreen from './OnboardingScreen';
import Welcome from './Welcome/Welcome.tsx';
import Home from './AppPages/Home.tsx';
import Login from './Login/Login.tsx';
import Signup from './Login/Signup.tsx';
import LoginP from'./Login/LoginP.tsx';
import SignupP from './Login/SignupP.tsx';
import DHome from'./DocApp/DHome.tsx';// Update the import
import PHome from './PatApp/PHome.tsx';
import PMap from './PatApp/PMap.tsx';
import P3 from './PatApp/P3.tsx';
import P4 from './PatApp/P4.tsx';
import P5 from './PatApp/P5.tsx';
import NavBar from './NavBar/NavBar.tsx';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OnboardingScreen">
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="LoginP" component={LoginP} options={{ headerShown: false }}/>
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }}/>
        <Stack.Screen name="SignupP" component={SignupP} options={{ headerShown: false }}/>
       <Stack.Screen name="DHome" component={DHome} options={{ headerShown: false }}/>
       <Stack.Screen name="PHome" component={PHome} options={{ headerShown: false }}/>
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }}/>
        <Stack.Screen name="PMap" component={PMap} options={{ headerShown: false }}/>
        <Stack.Screen name="P3" component={P3} options={{ headerShown: false }}/>
        <Stack.Screen name="P4" component={P4} options={{ headerShown: false }}/>
        <Stack.Screen name="P5" component={P5} options={{ headerShown: false }}/>
        <Stack.Screen name="NavBar" component={NavBar} options={{ headerShown: false }}/>



      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;





