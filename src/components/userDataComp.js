import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, Text, SafeAreaView  } from 'react-native';
import {
    userData,
  } from '../reducers/userSlice';
import { SimpleLineIcons } from '@expo/vector-icons'; 


export default userDataComp = () => {
    user = useSelector(userData);

  return (
    <SafeAreaView >
        <Text>
          {user.firstName + " test"}
      </Text>
      <SimpleLineIcons name="calculator" size={24} color="black" />
      <Text>
          {user.lastName + " test"}
      </Text>
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
