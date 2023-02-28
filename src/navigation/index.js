import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenNames from '../constants/ScreenNames';

//stacks
import DrawerStack from './DrawerStack';

//screens
import DetailScreen from '../screens/DetailScreen';
import { commonScreenOptions } from './Config';


const RootStack = createNativeStackNavigator();

const NavigationStack = ()=> {
    return (
        <RootStack.Navigator>
            <RootStack.Screen options={commonScreenOptions} name={ScreenNames.DrawerScreen.key} component={DrawerStack} />
            <RootStack.Screen name={ScreenNames.DetailScreen.key} component={DetailScreen} />
        </RootStack.Navigator>
    )
}


export default NavigationStack
