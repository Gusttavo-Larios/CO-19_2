import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import colors from '../styles/colors';
import Welcome from '../pages/Welcome'
import Home from '../pages/Home'

const stackRoutes = createStackNavigator()

//Routes stack
export default function StackRoutes() {
  return (
    <stackRoutes.Navigator
      headerMode='none'
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.textButton
        }
      }}
    >

      <stackRoutes.Screen
        name="Welcome"
        component={Welcome}
      />

      <stackRoutes.Screen
        name="Home"
        component={Home}
      />

    </stackRoutes.Navigator>
  )
}
