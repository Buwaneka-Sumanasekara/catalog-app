import * as React from 'react';
import { Provider } from 'react-redux';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Store from './redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import NavigationStack from './navigation';
import NavigationTheme from './theme/NavTheme';
const queryClient = new QueryClient();

export default function App() {
  return (
    <Provider store={Store}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer theme={NavigationTheme}>
          <NavigationStack />
        </NavigationContainer>
      </QueryClientProvider>
    </Provider>
  );
}
