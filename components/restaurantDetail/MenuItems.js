import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'

const foods= [
    {
        title: "Tandori Chicken",
        description: "Amazing indian dish with chicken.",
        price: "$19.20",
        image: "https://media.istockphoto.com/id/860428146/photo/chicken-tandoor-and-salad.jpg?s=612x612&w=0&k=20&c=NAeMZFDwlRach0GTava4Shm2y-eJ-K-UcxVbVh90ukk="
    },
    {
        title: "Tandori Chicken",
        description: "Amazing indian dish with chicken.",
        price: "$19.20",
        image: "https://media.istockphoto.com/id/860428146/photo/chicken-tandoor-and-salad.jpg?s=612x612&w=0&k=20&c=NAeMZFDwlRach0GTava4Shm2y-eJ-K-UcxVbVh90ukk="
    },
    {
        title: "Tandori Chicken",
        description: "Amazing indian dish with chicken.",
        price: "$19.20",
        image: "https://media.istockphoto.com/id/860428146/photo/chicken-tandoor-and-salad.jpg?s=612x612&w=0&k=20&c=NAeMZFDwlRach0GTava4Shm2y-eJ-K-UcxVbVh90ukk="
    },
    {
        title: "Tandori Chicken",
        description: "Amazing indian dish with chicken.",
        price: "$19.20",
        image: "https://media.istockphoto.com/id/860428146/photo/chicken-tandoor-and-salad.jpg?s=612x612&w=0&k=20&c=NAeMZFDwlRach0GTava4Shm2y-eJ-K-UcxVbVh90ukk="
    }
]

export default function MenuItems() {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View>
                {foods.map((food, index) => (
                    <View key={index} style={styles.menuItems}>
                        <FoodInfo food={ food } />
                        <FoodImage food={ food } />
                    </View>
                ))}
            </View>
        </ScrollView>
    )
}

const FoodInfo = (props) => (
    <View 
        style={{
            width: 240,
            justifyContent: "space-evenly"
        }}
    >
        <Text style={styles.titleStyle}>{ props.food.title }</Text>
        <Text>{ props.food.description }</Text>
        <Text>{ props.food.price }</Text>
    </View>
)

const FoodImage = (props) => (
    <View>
        <Image 
            source={{ uri: props.food.image }} 
            style={styles.foodImage} 
        />
    </View>
)


const styles = StyleSheet.create({
    menuItems: {
        flexDirection: "row",
        justifyContext: "space-between",
        margin: 20
    },
    titleStyle: {
        fontSize: 19,
        fontWeight: "600",
        marginBottom: 5
    },
    foodImage: {
        width: 100,
        height: 100,
        borderRadius: 8
    }
})