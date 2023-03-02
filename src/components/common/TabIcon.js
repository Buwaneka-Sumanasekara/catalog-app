import { IconButton } from 'react-native-paper';
import { View } from 'react-native';

const TabIcon = (props) => {
  const { screen } = props;
  return (
    <View>
      <IconButton icon={screen?.icon} />
    </View>
  );
};

export default TabIcon;
