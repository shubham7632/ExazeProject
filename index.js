import { AppRegistry } from 'react-native';
import React, {Component} from 'react';
import App from './screens/WelcomeScreen';
import { name as appName } from './app.json';
import { Provider, useSelector } from 'react-redux';

import configureStore from './store/store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import butttonScreen from './screens/butttonScreen';
import DetailsScreen from './screens/DetailsScreen';
import WelcomeScreen from './screens/WelcomeScreen';

const store = configureStore()
const Stack = createNativeStackNavigator();

const ExazeApp = () => {
return(
  <Provider store = { store }>
    <NavigationContainer>
    <Stack.Navigator initialRouteName="WelcomeScreen">
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}/>
        <Stack.Screen name="ButtonScreen" component={butttonScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      </Stack.Navigator>        
    </NavigationContainer>
  </Provider>
  )
}

AppRegistry.registerComponent(appName, () => ExazeApp);