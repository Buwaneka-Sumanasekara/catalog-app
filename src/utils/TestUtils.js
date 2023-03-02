import React from 'react';
import { render } from '@testing-library/react-native';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

const middlewares = [thunk];
const store = configureStore(middlewares);
const initialState = {
  favorites: {
    items: [],
    count: 0,
  },
};

const queryClient = new QueryClient();

const AllTheProviders = ({ children }) => {
  return (
    <Provider store={store(initialState)}>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <NavigationContainer>{children}</NavigationContainer>
        </SafeAreaProvider>
      </QueryClientProvider>
    </Provider>
  );
};

const customRender = (children) => render(<AllTheProviders>{children}</AllTheProviders>);

// re-export everything
export * from '@testing-library/react-native';

// override render method
export { customRender as render };
