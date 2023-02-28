import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native-paper';
import {  useRoute } from '@react-navigation/native';



const MainScreen  = ()=> {
    const route = useRoute();
    return <SafeAreaView>
   <Text>{route.name}</Text>
    </SafeAreaView>
}


export default MainScreen;
