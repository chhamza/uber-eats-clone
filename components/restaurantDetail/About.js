import { View, Text, Image } from 'react-native'
import React from 'react'

const image = 
    "https://www.questrmg.com/wp-content/uploads/2019/03/web-banner-Top-Three-Restaurant-Trends.jpg"

const title = "Farmhouse Kitchen Thai Cuisine"
const description = "Thai ☼ comfort ☼ Food ☼ $$ . ☼ . 4 ☼ (2914+)"

export default function About() {
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantTitle title={title} />
      <RestaurantDescription description={description} />
    </View>
  )
}

const RestaurantImage = (props) => (
    <Image 
        source={{ uri: props.image }}
        style={{
            width: "100%",
            height: 150
        }}
    />
)

const RestaurantTitle = (props) => (
    <Text
        style={{
            fontSize: 29,
            fontWeight: "600",
            marginTop: 10,
            marginHorizontal: 15
        }}
    >
        { props.title }
    </Text>
)

const RestaurantDescription = (props) => (
    <Text
        style={{
            fontSize: 15.5,
            fontWeight: "400",
            marginTop: 10,
            marginHorizontal: 15
        }}
    >
        { props.description }
    </Text>
)