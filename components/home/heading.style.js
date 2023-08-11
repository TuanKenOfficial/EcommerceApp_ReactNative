import { StyleSheet } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../../constants';


const styles = StyleSheet.create({
    container:{
        marginTop: SIZES.xLarge,
        marginHorizontal: 12
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerTitle:{
        fontFamily:'semibold',
        fontSize: SIZES.xLarge - 2
    }
})
export default styles;