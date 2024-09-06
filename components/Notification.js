import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

export default function Notification({ email, status }) {
  const sendEmail = async () => {
    await MailComposer.composeAsync({
      subject: 'Visa Application Status',
      recipients: [email],
      body: `Your visa application has been ${status}.`,
    });
  };

  sendEmail();

  return (
    <View style={styles.container}>
      <Text>Your application status has been updated. An email has been sent to you.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
