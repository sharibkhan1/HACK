import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import OnboardingScreen from './AppPages/OnboardingScreen.tsx';
import Welcome from './Welcome/Welcome.tsx';
import NavBar from '../NavBar/NavBar';

const PMap: React.FC = () => {
  return (
    <View>
      <NavBar />
      <View>
        {/* Your screen content goes here */}
       <Text style={{color:"black"}}>PMap</Text>
      </View>
    </View>
  );
};

export default PMap;
