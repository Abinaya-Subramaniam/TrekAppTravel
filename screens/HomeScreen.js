import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, ImageBackground } from 'react-native';
import ChatModal from '../components/ChatModal'; 

export default function HomeScreen({ navigation }) {
  const [isChatVisible, setIsChatVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          source={require('../assets/logo.png')} 
          style={styles.logo}
        />
        <Text style={styles.title}>Welcome to Trek</Text>
      </View>
      <Image
        source={require('../assets/sri_lanka_header.jpg')} 
        style={styles.headerImage}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('VisaApplication')}
        >
          <Text style={styles.buttonText}>Apply for Visa</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('VisaOfficer')}
        >
          <Text style={styles.buttonText}>Visa Officer Dashboard</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.popularImagesContainer}>
        <Text style={styles.sectionTitle}>Popular in Sri Lanka</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.imageScrollView}>
          <Image
            source={require('../assets/popular1.jpg')} 
            style={styles.popularImage}
          />
          <Image
            source={require('../assets/popular2.jpg')} 
            style={styles.popularImage}
          />
          <Image
            source={require('../assets/popular3.jpg')} 
            style={styles.popularImage}
          />
        </ScrollView>
      </View>
      <TouchableOpacity
        style={styles.chatButton}
        onPress={() => setIsChatVisible(true)}
      >
        <Text style={styles.chatButtonText}>Chat with Us</Text>
      </TouchableOpacity>
      <ChatModal visible={isChatVisible} onClose={() => setIsChatVisible(false)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#D9D5BC',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000000',
   
  },
  headerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderBottomWidth: 5,
    borderBottomColor: '#236476',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 5,
    borderRadius: 10,
  },
  buttonContainer: {
    marginTop: 20,
    width: '80%',
  },
  button: {
    backgroundColor: '#236476',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  popularImagesContainer: {
    marginTop: 20,
    width: '100%',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  imageScrollView: {
    flexDirection: 'row',
  },
  popularImage: {
    width: 150,
    height: 120,
    marginHorizontal: 10,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  chatButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#236476',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 50,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  chatButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
