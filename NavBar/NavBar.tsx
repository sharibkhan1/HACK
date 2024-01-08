import React from 'react';
import { View, Text, Button ,StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import OnboardingScreen from './AppPages/OnboardingScreen.tsx';
import Welcome from './Welcome/Welcome.tsx';

const NavBar: React.FC = () => {
  return (
    <View>

      <View>
        {/* Your screen content goes here */}
        <Text style={{color:"black"}}>NavBar</Text>
      </View>
      <NavBar />
    </View>
  );
};

export default NavBar;
