import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView, StyleSheet, Platform, StatusBar, ScrollView } from "react-native";
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import RestaurantItems, { localRestaurants } from '../components/RestaurantItems';

const YELP_API_KEY = "3ldzn1BuxeLA5BZDoOBZfcfF6NfgfEGAmKEyt1I8X3z3rF29ZO2pbLQhYc2_esJOGBQ7Fr2fNE8ZVjEYw6U8ecGbK_dyCwyUeklCNlah0ut8z9jRVNEn3Ug1UpawY3Yx"

export default function Home() {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  
  const getRestaurantsFromYelp = async () => {
    const yelpUrl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurants&location=Magdeburg"

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`
      },
    };
      
    return fetch(yelpUrl, apiOptions)
      .then(res => res.json())
      .then(json => setRestaurantData(json.businesses))
  }

  useEffect(() => {
    getRestaurantsFromYelp();
  }, []);

  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
        <View style={{ backgroundColor: "white", padding: 15 }}>
            <HeaderTabs />
            <SearchBar />
        </View>
        <ScrollView showsHorizontalScrollIndicator={false}>
          <Categories />
          <RestaurantItems restaurantData={restaurantData} />
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        backgroundColor: "#eee",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 5 : 0
    }
})

