import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from "@react-navigation/stack";
import AddNotes from './src/Components/AddNotes'

import NewNotes from "./src/Components/NewNotes";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        {/*<Stack.Screen
            name="AddNotes"
            component={AddNotes}
            options={{ headerShown: false }}
        />*/}

        <Stack.Screen
          name="NewNotes"
          component={NewNotes}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
