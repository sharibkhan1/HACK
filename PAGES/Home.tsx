import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet,Dimensions,ScrollView,TouchableOpacity ,Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProfileP from '../PROFILE/ProfileP.tsx';
import Button from "../Welcome/Buttons.tsx";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Home = ({ route }) => {
  const navigation = useNavigation();
 const { updatedName } = route.params || {};
  const [profileData, setProfileData] = useState({
    profileImage: require('../assets/arrow.png'),
    name: '',
    // ... (other properties)
  })

  const { name, profileImage } = profileData;
  useEffect(() => {
          const fetchData = async () => {
            try {
              const storedData = await AsyncStorage.getItem('profileData');
              if (storedData) {
                const parsedData = JSON.parse(storedData);
                setProfileData(parsedData);
              }
            } catch (error) {
              console.error('Error fetching data from AsyncStorage:', error);
            }
          };

          fetchData();
        }, [updatedName]);

        const {name: profileName, profileImage: userProfileImage } = profileData;
         const navigateToProfileP = () => {
            navigation.navigate("ProfileP");
          };
  return (
    <ScrollView style ={styles.Mcontainer}>
        <View
            style={{
            paddingTop:30,
              justifyContent: 'space-around', // Add space between the items
              alignItems:'center',
              flexDirection:'row',
            }}
          >
               <TouchableOpacity style={styles.container} onPress={navigateToProfileP}>
                   {/* Rounded container */}
                   <View style={styles.roundContainer}>
                     {/* Image or Icon goes here */}
                        <Image source={profileImage} style={{width:50,height:50,borderRadius:40}} />
                   </View>
                   <Text style={{ color: 'black', marginTop:0,fontSize: 17 }}>{profileName}</Text>
               </TouchableOpacity>
                 <View style={{flexDirection:"col",}}>
                          <Text style={{ fontStyle: 'italic',color: '#51604F', fontSize: 35, fontWeight:'bold' }}>CURE</Text>
                          <Text style={{ fontStyle: 'italic',color: 'red', fontSize: 22 }}>sathi</Text>
                 </View>

                 </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight:5,
    paddingLeft:5,
    width: 180, // Adjust the width as needed
    height: 70,
    backgroundColor: '#A4BFA7',
    justifyContent: 'space-around',
    borderRadius: 25,
    shadowColor:'black',elevation:5// Add margin to separate from the text above
  },
  roundContainer: {
      width: 54, // Adjust the size of the round container as needed
      height: 54,
      backgroundColor: '#51604F', // Adjust the background color as needed
      borderRadius: 30, // Half of the width and height to make it round
      justifyContent: 'center',
      alignItems: 'center',
    },
    Mcontainer:{
    padding:0,
    margin:0,
    },
});
export default Home;
