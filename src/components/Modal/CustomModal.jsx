import React from 'react';
import { View, Text, Modal } from 'react-native';
import styles from "./CustomModal.style"

const CustomModal = ({ visible, closeModal, message }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={closeModal}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text>{message}</Text>
        </View>
      </View>
    </Modal>
  );
};


export default CustomModal;
