import React, { useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useFetchAnimeById } from '../hooks/useFetchAnime';
import EmptyView from '../components/common/EmptyView';
import DetailHeader from '../components/details/DetailHeader';
import DetailBody from '../components/details/DetailBody';
import { MD2Colors, useTheme } from 'react-native-paper';
import DetailInfo from '../components/details/DetailInfo';
import ScrollWrapper from '../components/wrappers/ScrollWrapper';
import FavoriteButton from '../components/common/FavoriteButton';

const DetailScreen = () => {
  const { params } = useRoute();
  const navigation = useNavigation();

  const itemId = params?.itemId || '';

  const { data } = useFetchAnimeById(itemId);

  useEffect(() => {
    if (data) {
      navigation.setOptions({
        headerRight: () => <FavoriteButton size={40} color={MD2Colors.white} item={data} />,
      });
    }
  }, [navigation, data]);

  return (
    <ScrollWrapper noPadding>
      {!data && <EmptyView isLoading={true} />}
      {!!data && (
        <React.Fragment>
          <DetailHeader images={data?.images} />
          <DetailBody>
            <DetailInfo
              title={data?.title}
              score={data?.score}
              year={data?.year}
              synopsis={data?.synopsis}
              rating={data?.rating}
            />
          </DetailBody>
        </React.Fragment>
      )}
    </ScrollWrapper>
  );
};

export default DetailScreen;
