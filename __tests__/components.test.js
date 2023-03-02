import {AnimeFavListItem,EmptyView,DrawerLabel,SearchBarComponent,FavoriteButton,FavoriteCount,MenuButton} from '../src/components/common';
import { render } from '../src/utils/TestUtils'


describe('All components snapshot test:', () => {
  it('AnimeFavListItem snapshot:', () => {
      const { toJSON } = render(<AnimeFavListItem index={0} column={2} title={"test"}  onPress={()=>{}}/>)
      expect(toJSON()).toMatchSnapshot();
  })
  it('EmptyView snapshot:', () => {
    const { toJSON } = render(<EmptyView />)
    expect(toJSON()).toMatchSnapshot();
  })
  it('DrawerLabel snapshot:', () => {
    const { toJSON } = render(<DrawerLabel />)
    expect(toJSON()).toMatchSnapshot();
  })
  it('SearchBarComponent snapshot:', () => {
    const { toJSON } = render(<SearchBarComponent onChangeText={()=>{}} />)
    expect(toJSON()).toMatchSnapshot();
  })
  it('FavoriteButton snapshot:', () => {
    const { toJSON } = render(<FavoriteButton  />)
    expect(toJSON()).toMatchSnapshot();
  })
  it('FavoriteCount snapshot:', () => {
    const { toJSON } = render(<FavoriteCount  />)
    expect(toJSON()).toMatchSnapshot();
  })
  it('MenuButton snapshot:', () => {
    const { toJSON } = render(<MenuButton  />)
    expect(toJSON()).toMatchSnapshot();
  })
})
