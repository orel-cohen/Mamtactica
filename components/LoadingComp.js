import React from 'react';
import { StyleSheet, Text, SafeAreaView  } from 'react-native';
// import 'react-native-gesture-handler';

import { SimpleLineIcons } from '@expo/vector-icons'; 


export default LoadingComp = () => {
  return (
    <SafeAreaView >
      <SimpleLineIcons name="calculator" size={24} color="black" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
