import React from 'react';
import { View, Text, Button ,StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import OnboardingScreen from './AppPages/OnboardingScreen.tsx';
import Welcome from './Welcome/Welcome.tsx';
import NavBar from '../NavBar/NavBar.tsx';

const PHome: React.FC = () => {
  return (
    <View>

      <View>
        {/* Your screen content goes here */}
        <Text style={{color:"black"}}>PHome</Text>
      </View>
    </View>
  );
};

export default PHome;
