import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FitnessTracker from './Fitness';
import SettingsScreen from './Settings';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Fitness" 
        component={FitnessTracker} 
        options={{ headerShown: false }} 
      />
      <Tab.Screen 
        name="Settings" 
        component={SettingsScreen} 
        options={{ headerShown: false }} 
      />
    </Tab.Navigator>
  );
}
