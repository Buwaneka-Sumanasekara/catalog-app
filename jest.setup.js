import 'react-native-gesture-handler/jestSetup';
import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock'

jest.mock('react-native-safe-area-context', () => mockSafeAreaContext)

// include this section and the NativeAnimatedHelper section for mocking react-native-reanimated
jest.mock('react-native-reanimated', () => {
    const Reanimated = require('react-native-reanimated/mock');
  
    // The mock for `call` immediately calls the callback which is incorrect
    // So we override it with a no-op
    Reanimated.default.call = () => {};
  
    return Reanimated;
  });

  jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')

  jest.mock('@react-navigation/native', () => ({
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({ goBack: jest.fn() }),
    useRoute: () => ({
      params: {},
    }),
  }))
  

jest.mock('react-native-linear-gradient', () => 'LinearGradient');

jest.mock('axios', () => ({
  create:jest.fn(() => {
  }),
  get: jest.fn((url) => {
    if (url === '/anime/${id}') {
        return Promise.resolve({
            data: 'data'
        });
    }
  }),
}))
