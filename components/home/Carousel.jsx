import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box'
import { COLORS } from '../../constants'

const Carousel = () => {
    const slides = [
        "https://i0.wp.com/hocjavascript.net/wp-content/uploads/2021/05/E-Commerce-la-gi-Co-vai-tro-gi-Cac-loai-hinh-thuong-mai-dien-tu.jpg",
        "https://mrthanduc.files.wordpress.com/2018/08/abc1e32e-4ecd-49f8-aa24-52af2da89934.png",
        "https://cdnimgen.vietnamplus.vn/t620/uploaded/wbxx/2019_09_22/ecommerce_in_vietnam.jpg",
    ]
  return (
    <View style={styles.carouselContainer}>
        <SliderBox images ={slides}
            dotColor = {COLORS.primary}
            inactiveDotColor = {COLORS.secondary}
            ImageComponentStyle = {{borderRadius:15, width: "95%", marginTop: 15}}
            autoplay
            circleLoop
        />
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create({
    carouselContainer:{
        flex:1,
        alignItems: "center"
    }
})