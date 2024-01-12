import React from 'react';
import { View, Text } from 'react-native';

// Assuming you have a global Colors object or define it here

const P5= () => {
const Colors = {
  primary: 'green',
  primaryLite: 'orange',
};

  return (
    <View style={{
      justifyContent: "center",
      alignContent: "center",
      flex: 1,
      backgroundColor: Colors.primary, // Use primary color as the background
    }}>
      <View>
        <Text style={{ color: "black" }}>P3</Text>
      </View>
    </View>
  );
};

export default P5;
