import { ImageBackground, StyleSheet, View } from 'react-native';
import { Searchbar, MD2Colors, Chip, IconButton } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import Globals from '../../constants/Globals';
import { useEffect, useRef, useState } from 'react';
import { useDebounce } from '../../hooks/useFetchCommon';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    paddingBottom: Globals.PADDING.MEDIUM,
    backgroundColor:MD2Colors.white
  },
  inputStyle:{
    marginLeft:-10,
  },
  inputContainerStyle:{
    backgroundColor:MD2Colors.grey300,
    borderRadius:200,
  }
});

export default SearchBarComponent = (props) => {
  const { onChangeText, label,id } = props;

  const inputRef=useRef()
  const [query, setQuery] = useState('');

  const debouncedQuery = useDebounce(query, Globals.TIMEOUT.TEXT_TYPE);


  useEffect(()=>{
    setQuery("");
    inputRef?.current?.focus()
  },[id])

  useEffect(() => {
    onChangeText(debouncedQuery);
  }, [debouncedQuery]);

  return (
    <View style={styles.containerStyle}>
      <Searchbar 
        placeholder={label} 
        value={query} 
        onChangeText={(txt) => setQuery(txt)}
        inputStyle={styles.inputStyle}
        style={styles.inputContainerStyle}
        elevation={0}
        focusable={true}
        ref={inputRef}
        />
    </View>
  );
};
