import { Text, View , Image, TouchableOpacity} from 'react-native'
import React from 'react'
import styles from './productCartView.style'

const ProductCartView = () => {
  return (
   <TouchableOpacity onPress={()=>{}}>
     <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image
            style={styles.image}
            source={{uri:"https://tcxd.vn/wp-content/uploads/2019/10/E-commerce-bao-gom-nhung-gi.jpg"}}
            />

        </View>
        <View style={styles.detail}>
            <Text style={styles.title} numberOfLines={1}>Product</Text>
            <Text style={styles.supplier} numberOfLines={1}>Product</Text>
            <Text style={styles.price}>$254</Text>

        </View>

     </View>
   </TouchableOpacity>
  )
}

export default ProductCartView

