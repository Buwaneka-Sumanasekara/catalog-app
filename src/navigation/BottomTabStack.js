import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ScreenNames from '../constants/ScreenNames';
import MainScreen from '../screens/MainScreen';

const Tab = createMaterialBottomTabNavigator();

const BottomTabStack = ()=> {
  return (
    <Tab.Navigator>
      <Tab.Screen  options={{ title: ScreenNames.HomeAiringScreen.title}} name={ScreenNames.HomeAiringScreen.key} component={MainScreen} />
      <Tab.Screen  options={{ title: ScreenNames.HomeCompleteScreen.title }}  name={ScreenNames.HomeCompleteScreen.key} component={MainScreen} />
      <Tab.Screen options={{ title: ScreenNames.HomeUpComingScreen.title }}  name={ScreenNames.HomeUpComingScreen.key} component={MainScreen} />
    </Tab.Navigator>
  );
}

export default BottomTabStack
