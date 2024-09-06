import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import VisaApplicationScreen from './screens/VisaApplicationScreen';
import VisaOfficerScreen from './screens/VisaOfficerScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="VisaApplication" component={VisaApplicationScreen} />
        <Stack.Screen name="VisaOfficer" component={VisaOfficerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
