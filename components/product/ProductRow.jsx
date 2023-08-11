import { FlatList, Text, View } from "react-native";
import React from "react";
import { SIZES } from "../../constants";
import ProductCartView from "./ProductCartView";

const ProductRow = () => {
  const products = [1, 2, 3, 4];
  return (
    <View style={{marginTop: SIZES.small}}>
      <FlatList
        data={products}
        renderItem={({ item }) => (<ProductCartView/>)}
        
        horizontal
        contentContainerStyle={{ columnGap: SIZES.medium, "contentLength": 5760, "dt": 73324, "prevDt": 45606 }}
      />
    </View>
  );
};

export default ProductRow;
