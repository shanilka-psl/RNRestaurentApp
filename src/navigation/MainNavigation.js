import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Route} from '../common/Enums';
import Splash from '../screens/Spalsh';
import Signup from '../screens/Signup';

import MainTabNavigation from './MainTabNavigation';
import DrawerNavigation from './DrawerNavigation';
import Welcome from '../screens/Welcome';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Route.SPLASH}>
        <Stack.Screen
          name={Route.SPLASH}
          component={Splash}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name={Route.WELCOME}
          component={Welcome}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name={Route.SIGNUP}
          component={Signup}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name={Route.TAB_HOME}
          component={MainTabNavigation}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name={Route.DRAWER_HOME}
          component={DrawerNavigation}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
