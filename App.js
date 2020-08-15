import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import store from './src/reducers';
import { Provider } from 'react-redux'

import { LoadingComp, userDataComp } from "./src/components";

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="userData">
          <Stack.Screen name="Loading" component={LoadingComp} />
          <Stack.Screen name="userData" component={userDataComp} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
