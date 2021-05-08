import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ModalProvider, createModalStack } from 'react-native-modalfy'

import TestModal from './components/TestModal';
import TestComponent from './components/TestComponent';

const modalConfig = { TestModal }
const defaultOptions = { backdropOpacity: 0.6 }

const stack = createModalStack(modalConfig, defaultOptions)

export default function App() {
  return (
    <ModalProvider stack={stack}>
      <View style={styles.container}>
        <TestComponent  />
        <StatusBar style="auto" />
      </View>
    </ModalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
