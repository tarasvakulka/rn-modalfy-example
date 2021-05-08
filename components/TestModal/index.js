import React, { useEffect, useRef } from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const TestModal = ({
  modal: { closeModal }
}) => {
  const handleCloseButtonPress = () => {
    closeModal();
  };

  return (
    <View
      style={styles.container}
    >
      <Text style={styles.headerText}>Test modal!</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={handleCloseButtonPress}
      >
        <Text>Close modal</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TestModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  headerText: {
    marginTop: 40,
    color: 'yellow'
  },
  button: {
    width: 200,
    height: 45,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40
  }
});
