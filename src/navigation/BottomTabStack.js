import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ScreenNames from '../constants/ScreenNames';
import MainScreen from '../screens/MainScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

const BottomTabStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          title: ScreenNames.HomeAiringScreen.title,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name={ScreenNames.HomeAiringScreen.icon}
              color={color}
              size={26}
            />
          ),
        }}
        name={ScreenNames.HomeAiringScreen.key}
        component={MainScreen}
      />
      <Tab.Screen
        options={{
          title: ScreenNames.HomeCompleteScreen.title,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name={ScreenNames.HomeCompleteScreen.icon}
              color={color}
              size={26}
            />
          ),
        }}
        name={ScreenNames.HomeCompleteScreen.key}
        component={MainScreen}
      />
      <Tab.Screen
        options={{
          title: ScreenNames.HomeUpComingScreen.title,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name={ScreenNames.HomeUpComingScreen.icon}
              color={color}
              size={26}
            />
          ),
        }}
        name={ScreenNames.HomeUpComingScreen.key}
        component={MainScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomTabStack;
