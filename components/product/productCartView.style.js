import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    container:{
        width: 182,
        height: 240,
        marginEnd: 10,
        borderRadius: SIZES.medium,
        backgroundColor: COLORS.primary
    },
    imageContainer:{
        flex: 1,
        width: 170,
        marginLeft: SIZES.small/2,
        marginTop: SIZES.small/2,
        borderRadius: SIZES.small,
        overflow: "hidden"

    }, 
    image:{
        aspectRatio: 2,
        resizeMode: 'cover'
    },
    detail:{
        padding: SIZES.small
    },
    title:{
        fontFamily: 'bold',
        fontSize: SIZES.medium,
        marginBottom: 1
    },
    supplier:{
        fontFamily: 'regular',
        fontSize: SIZES.small,
        color: COLORS.gray
    },
    price:{
        fontFamily: 'bold',
        fontSize: SIZES.medium,
       
    }

})
export default styles;