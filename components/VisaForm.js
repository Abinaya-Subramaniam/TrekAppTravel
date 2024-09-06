import React, { useState } from 'react';
import { View, TextInput, Button, Image, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function VisaForm({ onSubmit }) {
  const [fullName, setFullName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [passportImage, setPassportImage] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [travelHistory, setTravelHistory] = useState('');

  const pickImage = async (type) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.canceled) {
      if (type === 'passport') {
        setPassportImage(result.uri);
      } else {
        setPhoto(result.uri);
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Visa Application Form</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
      />
      <TextInput
        style={styles.input}
        placeholder="Date of Birth (YYYY-MM-DD)"
        value={dateOfBirth}
        onChangeText={setDateOfBirth}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        keyboardType="phone-pad"
        value={mobileNumber}
        onChangeText={setMobileNumber}
      />
      <View style={styles.buttonContainer}>
        <Button title="Upload Passport Bio Page" onPress={() => pickImage('passport')} />
        {passportImage && <Image source={{ uri: passportImage }} style={styles.image} />}
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Upload Passport Photo" onPress={() => pickImage('photo')} />
        {photo && <Image source={{ uri: photo }} style={styles.image} />}
      </View>
      <TextInput
        style={styles.input}
        placeholder="Travel History (last 12 months)"
        value={travelHistory}
        onChangeText={setTravelHistory}
        multiline
        numberOfLines={4}
      />
      <Button title="Submit Application" onPress={() => onSubmit({ fullName, dateOfBirth, email, mobileNumber, passportImage, photo, travelHistory })} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#F8F8F8',
  },
  buttonContainer: {
    marginBottom: 20, 
  },
  image: {
    width: '100%',
    height: 150,
    marginVertical: 10,
    borderRadius: 5,
    resizeMode: 'cover',
  },
});
