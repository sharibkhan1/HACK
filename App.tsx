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
import HomeStackNavigator from './NavBar/NavBar.tsx';


const App=()=>{
    return(
        <NavigationContainer>
            <HomeStackNavigator/>
        </NavigationContainer>

    );
};



export default App;





