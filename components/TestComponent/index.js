import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useModal } from 'react-native-modalfy';

const TestComponent = () => {
  const { openModal } = useModal();

  const handleShowModalPress = () => {
    openModal('TestModal');
  };

  return (
    <View
      style={styles.container}
    >
      <TouchableOpacity
        style={styles.button}
        onPress={handleShowModalPress}
      >
        <Text>Show modal</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonWithIssue}
      >
        <Text>Button with issue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TestComponent ;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 200,
    height: 45,
    backgroundColor: 'red',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20
  },
  buttonWithIssue: {
    position: 'absolute',
    bottom: 0,
    width: 200,
    height: 65,
    backgroundColor: 'green',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  }
});
