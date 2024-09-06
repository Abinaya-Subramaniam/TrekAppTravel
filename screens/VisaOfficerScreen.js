import React from 'react';
import { View, StyleSheet } from 'react-native';
import VisaOfficerDashboard from '../components/VisaOfficerDashboard';

export default function VisaOfficerScreen() {
  return (
    <View style={styles.container}>
      <VisaOfficerDashboard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#236476',
  },
});
