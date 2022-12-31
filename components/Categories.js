import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function Categories() {
  const [activeCat, setActiveCat] = useState("Pick-up");

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 10,
        padding: 10,
        backgroundColor: "white",
        alignItems: "center",
      }}
    >
      <CategoryBtn 
          text="Pick-up"
          image="shopping-bag.png"
          activeCat={activeCat} 
          setActiveCat={setActiveCat}
      />
      <CategoryBtn 
          text="Soft Drinks"
          image="soft-drink.png"
          activeCat={activeCat} 
          setActiveCat={setActiveCat}
      />
      <CategoryBtn 
          text="Bakery Items"
          image="bread.png"
          activeCat={activeCat} 
          setActiveCat={setActiveCat}
      />
      <CategoryBtn 
          text="Fast Food"
          image="fast-food.png"
          activeCat={activeCat} 
          setActiveCat={setActiveCat}
      />
    </View>
  )
}

const CategoryBtn = (props) => (
    <TouchableOpacity 
      style={{
        backgroundColor: props.activeCat === props.text ? "#ecdede" : "white",
        borderRadius: 16,
        padding: "8px",
        flexDirection: "column-reverse",
        justifyContent: "center",
        alignItems: "center"
      }}
      onPress={() => props.setActiveCat(props.text)}
    >
        <Text style={{ fontWeight: "700" }}>{ props.text }</Text>
        <Image style={{ width: 40, height: 40  }} source={{ uri: `asset:/${ props.image }` }} />
    </TouchableOpacity>
)

const styles = StyleSheet.create({
  categoryItems: {
    flexDirection: "column-reverse",
    alignItems: "center"
  }
})