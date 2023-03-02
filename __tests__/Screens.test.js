import DetailScreen from '../src/screens/DetailScreen';
import { render } from '../src/utils/TestUtils'

describe('All Screens renders snapshots check:', () => {
  it('DetailScreen', () => {
      const { toJSON } = render(<DetailScreen/>)
      expect(toJSON()).toMatchSnapshot();
  })
})
