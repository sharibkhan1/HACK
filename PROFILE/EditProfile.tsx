import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Importing an icon library for better visuals
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Button from "../Welcome/Buttons.tsx";
import ProfileP from '../PatApp/ProfileP/ProfileP.tsx';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
const EditProfile = () => {

  const [profileImage, setProfileImage] = useState(require('../assets/arrow.png'));
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');
  const [email, setEmail] = useState('');

  const handleProceed = async () => {
    try {
    if (!gender) {
          // Handle the case where gender is not selected
          console.log('Please select a gender');
          return;
        }
          const data = {
            profileImage,
            name,
            age,
           gender,
                  phoneNumber,
                  address,
                  country,
                  state,
                  pincode,
                  email,
          };
          await AsyncStorage.setItem('profileData', JSON.stringify(data));
            navigation.navigate('PHome', { updatedName: name });
        } catch (error) {
          console.error('Error saving data to AsyncStorage:', error);
        }

 navigation.navigate('ProfileP', {
       profileImage,
       name,
       age,
       gender,
       phoneNumber,
       address,
       country,
       state,
       pincode,
       email,
     });
   };

useEffect(() => {
    // Fetch the saved data from AsyncStorage
    const fetchData = async () => {
      try {
        const storedData = await AsyncStorage.getItem('profileData');
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          setProfileImage(parsedData.profileImage);
          setName(parsedData.name);
                  setAge(parsedData.age);
                  setGender(parsedData.gender);
                  setPhoneNumber(parsedData.phoneNumber);
                  setAddress(parsedData.address);
                  setCountry(parsedData.country);
                  setState(parsedData.state);
                  setPincode(parsedData.pincode);
                  setEmail(parsedData.email);
          // ... (Set other state values)
        }
      } catch (error) {
        console.error('Error fetching data from AsyncStorage:', error);
      }
    };

    fetchData();
  }, []);
  const pickerRef = useRef();

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }
const navigation = useNavigation();
  const handleImagePicker = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 300,
        height: 300,
        cropping: true,
        includeBase64: true,
        compressImageQuality: 0.7,
      });

      const source = { uri: `data:${image.mime};base64,${image.data}` };
      setProfileImage(source);

      // You may want to save the image path to storage for future use
      // const imagePath = source.uri;
      // ... save imagePath to storage ...
    } catch (error) {
      console.log('ImagePicker Error: ', error);
    }
  };

  return (
    <ScrollView style={styles.container}>

      <View style={styles.profileSection}>
        <TouchableOpacity onPress={handleImagePicker} style={styles.imageContainer}>
          <Image source={profileImage} style={styles.profileImage} />
          <Icon name="edit" size={20} color="white" style={styles.editIcon} />
        </TouchableOpacity>
        <Text style={styles.changeImageText}>Change Profile Picture</Text>
      </View>

      <View style={styles.inputSection}>
        <View style={styles.inputRow}>
          <Text style={styles.inputTitle}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={(text) => setName(text)}
          />
        </View>
<View style={styles.inputRow}>
          <Text style={styles.inputTitle}>Age</Text>
          <TextInput
            style={styles.input}
            placeholder="Age"
            value={age}
            onChangeText={(text) => setAge(text)}
            keyboardType="numeric"
          />
        </View>

       <View style={styles.inputRow}>
         <Text style={styles.inputTitle}>Gender</Text>
         <Picker
           style={styles.input}
           mode='dropdown'
           selectedValue={gender}
           onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
         >
           <Picker.Item label="Select Gender" value="" color='green'/>
           <Picker.Item label="Male" value="Male" />
           <Picker.Item label="Female" value="Female" />
           <Picker.Item label="Other" value="Other" />
         </Picker>
       </View>

        <View style={styles.inputRow}>
          <Text style={styles.inputTitle}>Phone No</Text>
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            value={phoneNumber}
            onChangeText={(text) => setPhoneNumber(text)}
            keyboardType="phone-pad"
          />
        </View>

        <View style={styles.inputRow}>
          <Text style={styles.inputTitle}>Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Address"
            value={address}
            onChangeText={(text) => setAddress(text)}
          />
        </View>

        <View style={styles.inputRow}>
          <Text style={styles.inputTitle}>Country</Text>
          <TextInput
            style={styles.input}
            placeholder="Country"
            value={country}
            onChangeText={(text) => setCountry(text)}
          />
        </View>

        <View style={styles.inputRow}>
          <Text style={styles.inputTitle}>State</Text>
          <TextInput
            style={styles.input}
            placeholder="State"
            value={state}
            onChangeText={(text) => setState(text)}
          />
        </View>

        <View style={styles.inputRow}>
          <Text style={styles.inputTitle}>Pincode</Text>
          <TextInput
            style={styles.input}
            placeholder="Pincode"
            value={pincode}
            onChangeText={(text) => setPincode(text)}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.inputRow}>
          <Text style={styles.inputTitle}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
          />
        </View>
      </View>

      <TouchableOpacity style={styles.proceedButton} onPress={handleProceed}>
        <Text style={styles.proceedButtonText}>Proceed</Text>
      </TouchableOpacity>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6F4E6', // Light green background
    padding: 20,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  imageContainer: {
    position: 'relative',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  editIcon: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: 'green',
    padding: 5,
    borderRadius: 12,
  },
  changeImageText: {
    marginTop: 10,
    color: 'green',
    fontSize: 16,
  },
  inputSection: {

    marginBottom: 20,
  },
  inputRow: {
    marginBottom: 10,
  },
  inputTitle: {
    color: 'green',
    marginBottom: 5,
    fontSize: 16,
  },
  input: {
    height: 40,
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
    color:'orange'
  },
  proceedButton: {
    backgroundColor: 'green',
    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
    marginBottom:60

  },
  proceedButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default EditProfile;