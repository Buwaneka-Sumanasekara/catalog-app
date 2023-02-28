import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenNames from '../constants/ScreenNames';

//stacks
import DrawerStack from './DrawerStack';

//screens
import DetailScreen from '../screens/DetailScreen';


const RootStack = createNativeStackNavigator();

const NavigationStack = ()=> {
    return (
        <RootStack.Navigator>
            <RootStack.Screen name={ScreenNames.DrawerScreen} component={DrawerStack} />
            <RootStack.Screen name={ScreenNames.DetailScreen} component={DetailScreen} />
        </RootStack.Navigator>
    )
}


export default NavigationStack
