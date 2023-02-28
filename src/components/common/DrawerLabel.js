import {StyleSheet, View} from "react-native"
import { IconButton, List } from "react-native-paper"

/* Styles ==================================================================== */
const styles = StyleSheet.create({
    containerStyle: {
        paddingVertical:0,
        paddingHorizontal:0,
        justifyContent:"space-between",
        flex:1,
        marginRight:-30,
    },
    iconStyle:{
        backgroundColor:'transparent'
    }
})

const DrawerLabel = (props) => {
    const {rightElement:RightElement,title}=props;
    return (
        <List.Item
        title={title}
        style={styles.containerStyle}
        left={props => <List.Icon {...props} icon="camera" />}
        right={RightElement?props=><RightElement {...props}/>:undefined}
        />
    )
}

export default DrawerLabel
