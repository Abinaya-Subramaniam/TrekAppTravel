import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';

export default function VisaOfficerDashboard() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
  
    const mockData = [
      { id: '1', name: 'John Doe', dateOfBirth: '1990-01-01', email: 'john.doe@example.com' },
      { id: '2', name: 'Jane Smith', dateOfBirth: '1985-05-23', email: 'jane.smith@example.com' },
      { id: '3', name: 'Alice Johnson', dateOfBirth: '1992-07-15', email: 'alice.johnson@example.com' },
    ];
    setApplications(mockData);

   
    /*
    axios.get('https://example.com/api/visa-applications')
      .then(response => {
        setApplications(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    */
  }, []);

  const handleApprove = (id) => {
  
    console.log(`Approved application with id ${id}`);
  };

  const handleReject = (id) => {
    
    console.log(`Rejected application with id ${id}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Visa Applications</Text>
      <FlatList
        data={applications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text>Date of Birth: {item.dateOfBirth}</Text>
            <Text>Email: {item.email}</Text>
            <View style={styles.buttonContainer}>
              <Button title="Approve" onPress={() => handleApprove(item.id)} />
              <Button title="Reject" onPress={() => handleReject(item.id)} />
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
