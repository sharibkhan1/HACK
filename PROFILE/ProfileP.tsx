import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet ,TouchableOpacity} from 'react-native';
import Button from "../Welcome/Buttons.tsx";
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EditProfile from '../PROFILE/EditProfile.tsx';
import AsyncStorage from '@react-native-async-storage/async-storage';// Import AsyncStorage
const ProfileP = ({ route }) => {
   const [profileData, setProfileData] = useState({
      profileImage: require('../assets/arrow.png'),
      name: '',
      age: '',
      gender: '',
      phoneNumber: '',
      address: '',
      country: '',
      state: '',
      pincode: '',
      email: '',
    }); //= route.params || {};
    const navigation = useNavigation();
    const displayedProfileImage = profileImage || require('../assets/arrow.png');
 const {
    profileImage = require('../assets/arrow.png'),
    name,
    age,
    gender,
    phoneNumber,
    address,
    country,
    state,
    pincode,
    email,
  } = profileData;
 useEffect(() => {
    const fetchData = async () => {
      try {
        const storedData = await AsyncStorage.getItem('profileData');
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          // Set the state values with the fetched data
          setProfileData(parsedData);
        }
      } catch (error) {
        console.error('Error fetching data from AsyncStorage:', error);
      }
    };

    fetchData();
  }, []);


  return (

    <View style={styles.container}>
   <TouchableOpacity
                             style={{ marginLeft: 0}}
                             onPress={() => navigation.goBack({ name })}
                           >
                       <Ionicons
                         size={60}
                         type='arrow-back-circle-sharp'
                         name='arrow-back-circle-sharp'
                         color='black'
                       />

                     </TouchableOpacity>
      <View style={styles.profileSection}>
        <Image source={displayedProfileImage} style={styles.profileImage} />
        <Text style={styles.name}>{name}</Text>
      </View>

      <View style={styles.detailsSection}>
        <View style={styles.detailRow}>
          <Text style={styles.detailTitle}>Age:</Text>
          <Text style={styles.detailValue}>{age}</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailTitle}>Gender:</Text>
          <Text style={styles.detailValue}>{gender}</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailTitle}>Phone No:</Text>
          <Text style={styles.detailValue}>{phoneNumber}</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailTitle}>Address:</Text>
          <Text style={styles.detailValue}>{address}</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailTitle}>Country:</Text>
          <Text style={styles.detailValue}>{country}</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailTitle}>State:</Text>
          <Text style={styles.detailValue}>{state}</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailTitle}>Pincode:</Text>
          <Text style={styles.detailValue}>{pincode}</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailTitle}>Email:</Text>
          <Text style={styles.detailValue}>{email}</Text>
        </View>
      </View>
      <Button title="Details" filled style={styles.button} onPress={() => navigation.navigate('EditProfile')}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6F4E6',
    padding: 20,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
  },
  detailsSection: {
    marginBottom: 20,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  detailTitle: {
    color: 'green',
    fontSize: 16,
  },
  detailValue: {
    fontSize: 16,
    color: 'orange',
  },
});

export default ProfileP;