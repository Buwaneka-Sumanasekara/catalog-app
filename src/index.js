import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import NavigationStack from "./navigation"

export default function App() {
  return (
    <NavigationContainer>
        <NavigationStack/>
    </NavigationContainer>
  );
}
