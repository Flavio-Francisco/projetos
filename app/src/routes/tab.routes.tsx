import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

import Login from '../screens/login';
import Register from '../screens/register';
import Home from '../screens/Home';
import Options from '../screens/Options';
import { CreateCategory } from '../screens/CreateCategory';
import Stack from './stack.routes';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';



const { Navigator, Screen } = createStackNavigator();

export default function Tab() {
  return (
    <Navigator>

      <Screen
        name='Home'
        component={Home}
        options={{
          headerShown: false

        }}
      />
      <Screen
        name='CreateCategory'
        component={CreateCategory}

      />
    </Navigator>
  )
}