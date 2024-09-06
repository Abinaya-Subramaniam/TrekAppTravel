import React, { useState } from 'react';
import { View, Text, TextInput, Button, Modal, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function ChatModal({ visible, onClose }) {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  const handleSend = () => {
    if (message.trim()) {
      setChat([...chat, { text: message, user: true }]);
      setMessage('');
      
      setTimeout(() => {
        setChat([...chat, { text: message, user: true }, { text: 'How can I assist you further?', user: false }]);
      }, 1000);
    }
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={true} onRequestClose={onClose}>
      <TouchableOpacity style={styles.modalOverlay} onPress={onClose}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent} onTouchStart={(e) => e.stopPropagation()}>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
            <ScrollView style={styles.chatContainer}>
              {chat.map((message, index) => (
                <View
                  key={index}
                  style={[styles.message, message.user ? styles.userMessage : styles.aiMessage]}
                >
                  <Text>{message.text}</Text>
                </View>
              ))}
            </ScrollView>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={message}
                onChangeText={setMessage}
                placeholder="Type your message..."
              />
              <Button title="Send" onPress={handleSend} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: '60%',
    padding: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#236476',
    padding: 10,
    borderRadius: 20,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  chatContainer: {
    flex: 1,
    paddingBottom: 50, 
  },
  message: {
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,
  },
  userMessage: {
    backgroundColor: '#236476',
    alignSelf: 'flex-end',
    color: 'white',
  },
  aiMessage: {
    backgroundColor: '#E1E1E1',
    alignSelf: 'flex-start',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#E1E1E1',
  },
  input: {
    flex: 1,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E1E1E1',
    marginRight: 10,
  },
});
