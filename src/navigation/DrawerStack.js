import { StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ScreenNames from '../constants/ScreenNames';

//screens
import FavoritesScreen from '../screens/FavoritesScreen';
import BottomTabStack from './BottomTabStack';
import CustomDrawerContent from '../components/wrappers/CustomDrawer';

import DrawerLabel from '../components/common/DrawerLabel.js';
import FavoriteCount from '../components/common/FavoriteCount';
import MenuButton from '../components/common/MenuButton';

const Drawer = createDrawerNavigator();

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  drawerItemStyle: {
    paddingHorizontal: 0,
    marginVertical: 0,
    marginHorizontal: -10,
  },
});

const DrawerStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={({ navigation }) => ({
        drawerItemStyle: styles.drawerItemStyle,
        headerLeft: (props) => {
          return <MenuButton onPress={navigation.toggleDrawer} />;
        },
        headerShadowVisible: false,
      })}
    >
      <Drawer.Screen
        options={{
          title: ScreenNames.HomeScreen.title,
          drawerLabel: (props) => (
            <DrawerLabel
              {...props}
              title={ScreenNames.HomeScreen.titleExtra || ScreenNames.HomeScreen.title}
              leftIcon={ScreenNames.HomeScreen.icon}
            />
          ),
        }}
        name={ScreenNames.HomeScreen.key}
        component={BottomTabStack}
      />
      <Drawer.Screen
        options={{
          title: ScreenNames.FavoritesScreen.title,
          drawerLabel: (props) => (
            <DrawerLabel
              {...props}
              rightElement={(props) => <FavoriteCount {...props} />}
              title={ScreenNames.FavoritesScreen.title}
              leftIcon={ScreenNames.FavoritesScreen.icon}
            />
          ),
        }}
        name={ScreenNames.FavoritesScreen.key}
        component={FavoritesScreen}
      />
    </Drawer.Navigator>
  );
};

export default DrawerStack;
