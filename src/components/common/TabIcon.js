import { IconButton } from 'react-native-paper';

const TabIcon = (props) => {
  const { screen } = props;
  return <IconButton icon={screen?.icon} />;
};

export default TabIcon;
