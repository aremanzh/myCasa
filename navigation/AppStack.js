import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '../screens';
import { Icon } from '../components';
import { Button } from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from '../config';
import { View } from 'react-native';

const Stack = createStackNavigator();

export const AppStack = () => {
  const handleLogout = () => {
    signOut(auth).catch(error => console.log('Error logging out: ', error));
  };

  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen} options={{
        headerShown: false,
        title: "iCasa ",
        headerRight: () => (
          <Icon name="logout" color="#433362" size={20} onPress={handleLogout} style={{ marginRight: 16 }} />
        ),
      }}
      />
    </Stack.Navigator>
  );
};
