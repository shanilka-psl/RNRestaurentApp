/* eslint-disable react/react-in-jsx-scope */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Welcome from '../screens/Welcome';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialIcons';
import {HomeIcon} from '../assets/Icons/HomeIcon';
import CommonStyles from '../common/CommonStyles';

const Tab = createBottomTabNavigator();

function MainTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <HomeIcon fill={CommonStyles.colors.primary} />
            ) : (
              <HomeIcon fill={CommonStyles.colors.grey} />
            );
          },
        }}
      />

      <Tab.Screen
        name="Welcome"
        component={Welcome}
        options={{
          tabBarLabel: 'Welcome',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="alarm" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTabNavigation;
