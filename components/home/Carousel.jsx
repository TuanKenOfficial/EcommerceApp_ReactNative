import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box'
import { COLORS } from '../../constants'

const Carousel = () => {
    const slides = [
        "https://web4s.vn/uploads/tiny_uploads/tin/ecommerce/E-commerce.jpg",
        "https://static.vinwonders.com/2022/04/dac-san-nha-trang-1.png",
        "https://images.squarespace-cdn.com/content/v1/53883795e4b016c956b8d243/1563001815382-RKZSXSOGODXYBC4JP0O1/image-asset.jpeg",
        "https://tcxd.vn/wp-content/uploads/2019/10/E-commerce-bao-gom-nhung-gi.jpg"
       
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