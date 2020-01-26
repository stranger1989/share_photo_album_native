import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import DrawerNavigation from './DrawerNavigation';
import AuthScreen from '../screens/AuthScreen';

const AppNavigator = createAppContainer(
    createSwitchNavigator(
    {
      Auth: AuthScreen,
      Home: DrawerNavigation,
    },
    {
      initialRouteName: 'Auth',
    }
  )
);

export default AppNavigator;