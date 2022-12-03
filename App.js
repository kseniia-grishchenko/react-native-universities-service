import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {StyleSheet, Image} from 'react-native';

import UniversitiesList from './src/comps/universitiesList.js';
import Map from './src/comps/map.js';

import uni from './assets/icons/uni.png';
import map from './assets/icons/map.png';
import addressBook from './assets/icons/address_book.png';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Universities list') {
              iconName = uni;
            } else if (route.name === 'Map') {
              iconName = map;
            }

            // You can return any component that you like here!
            return <Image source={iconName} style={styles.btnImage} />;
          },
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#fff',
          tabBarStyle: {
            backgroundColor: '#006D77',
          },
        })}>
        <Stack.Screen name="Universities list" component={UniversitiesList} />
        <Stack.Screen name="Map" component={Map} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
