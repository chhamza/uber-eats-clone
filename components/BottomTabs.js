import { View, Text } from 'react-native'
import React from 'react'
import FontAwesome5  from "react-native-vector-icons/FontAwesome5";


export default function BottomTabs() {
  return (
    <View 
        style={{
            flexDirection: "row",
            margin: 10,
            marginHorizontal: 38,
            justifyContent: "space-between"
        }}
    >
      <Icon icon="home" text="Home" />
      <Icon icon="search" text="Browse" />
      <Icon icon="shopping-bag" text="Grocery" />
      <Icon icon="receipt" text="Orders" />
      <Icon icon="user" text="User" />
    </View>
  )
}

const Icon = (props) => (
    <View>
        <FontAwesome5 
            name={props.icon}
            size={25}
            style = {{
                marginBotton: 3,
                alignSelf: "center"
            }}
        />
        <Text>{props.text}</Text>
    </View>
)