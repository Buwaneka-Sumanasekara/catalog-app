import { createDrawerNavigator } from '@react-navigation/drawer';
import ScreenNames from '../constants/ScreenNames';


//screens
import MainScreen from "../screens/MainScreen"
import FavoritesScreen from "../screens/FavoritesScreen"


const Drawer = createDrawerNavigator();

const DrawerStack = ()=> {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name={ScreenNames.HomeScreen} component={MainScreen} />
            <Drawer.Screen name={ScreenNames.FavoritesScreen} component={FavoritesScreen} />
        </Drawer.Navigator>
    )
}


export default DrawerStack
