import React from 'react';
import { useRoute } from '@react-navigation/native';
import { useFetchAnimeById } from '../hooks/useFetchAnime';
import DefaultWrapper from '../components/wrappers/DefaultWrapper';

const DetailScreen = () => {
  const { params } = useRoute();

  const itemId = params?.itemId || '';

  const { data } = useFetchAnimeById(itemId);

  return <DefaultWrapper></DefaultWrapper>;
};

export default DetailScreen;
