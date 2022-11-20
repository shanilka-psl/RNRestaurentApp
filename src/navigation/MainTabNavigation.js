/* eslint-disable react/react-in-jsx-scope */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import {IconHome} from '../assets/Icons/IconHome';
import {IconFavorites} from '../assets/Icons/IconFavorites';
import CommonStyles from '../common/CommonStyles';
import Favorites from '../screens/Favorites';

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
              <IconHome fill={CommonStyles.colors.primary} />
            ) : (
              <IconHome fill={CommonStyles.colors.grey} />
            );
          },
        }}
      />

      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: 'Welcome',
          tabBarIcon: ({focused}) => {
            return focused ? (
              <IconFavorites fill={CommonStyles.colors.primary} />
            ) : (
              <IconFavorites fill={CommonStyles.colors.grey} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTabNavigation;
