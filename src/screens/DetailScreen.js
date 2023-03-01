import React from 'react';
import { useRoute } from '@react-navigation/native';


const DetailScreen = () => {
  const {params} = useRoute()

  const itemId=params?.itemId || ""


  

  return  <DefaultWrapper>
      
  </DefaultWrapper>
};

export default DetailScreen;
