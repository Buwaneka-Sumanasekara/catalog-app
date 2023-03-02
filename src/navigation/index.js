import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenNames from '../constants/ScreenNames';

//stacks
import DrawerStack from './DrawerStack';
import DetailScreen from '../screens/DetailScreen';
import { commonScreenOptions, detailScreenOptions } from './Config';
import BackButton from '../components/common/BackButton';

const RootStack = createNativeStackNavigator();

const NavigationStack = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        options={commonScreenOptions}
        name={ScreenNames.DrawerScreen.key}
        component={DrawerStack}
      />
      <RootStack.Screen
        options={({ navigation }) => ({
          ...detailScreenOptions,
          headerLeft: (props) => {
            return <BackButton onPress={() => navigation.goBack()} />;
          },
        })}
        name={ScreenNames.DetailScreen.key}
        component={DetailScreen}
      />
    </RootStack.Navigator>
  );
};

export default NavigationStack;
