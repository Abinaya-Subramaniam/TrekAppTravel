import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import VisaForm from '../components/VisaForm';

export default function VisaApplicationScreen() {
  const handleSubmit = (application) => {
    const apiUrl = 'https://example.com/api/submit-visa-application';

    
    axios.post(apiUrl, application)
      .then(response => {
       
        console.log('Application submitted successfully:', response.data);
        Alert.alert('Success', 'Your visa application has been submitted successfully.');
        
      })
      .catch(error => {
        console.error('Error submitting application:', error);
        Alert.alert('Error', 'There was an issue submitting your application. Please try again.');
      });
  };

  return (
    <View style={styles.container}>
      <VisaForm onSubmit={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#7B9EA0',
  },
});
