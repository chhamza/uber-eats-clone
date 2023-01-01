import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView, StyleSheet, Platform, StatusBar, ScrollView } from "react-native";
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import RestaurantItems, { localRestaurants } from '../components/RestaurantItems';
import BottomTabs from '../components/BottomTabs';
import { Divider } from 'react-native-elements';

const YELP_API_KEY = "3ldzn1BuxeLA5BZDoOBZfcfF6NfgfEGAmKEyt1I8X3z3rF29ZO2pbLQhYc2_esJOGBQ7Fr2fNE8ZVjEYw6U8ecGbK_dyCwyUeklCNlah0ut8z9jRVNEn3Ug1UpawY3Yx"
export const empty = [];

export default function Home() {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState("Magdeburg");
  const [activeTab, setActiveTab] = useState("Delivery");
  
  const getRestaurantsFromYelp = async () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`
      },
    };
      
    return fetch(yelpUrl, apiOptions)
      .then(res => res.json())
      .then(json => {
        if(json) {
          setRestaurantData(json.businesses)
        }
      })
  }

  const setRestaurantTransaction = async () => {
    const yelpTransactionUrl = `https://api.yelp.com/v3/transactions/${activeTab.toLowerCase()}/search?term=restaurants&location=${city}`

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`
      },
    };
      
    return fetch(yelpTransactionUrl, apiOptions)
      .then(res => {
        if (res.ok) {
          return res.json()
        }
      })
      .then(json => {
        if(json != undefined) {
          setRestaurantData(json.businesses)
        } else {
          setRestaurantData(empty)
        }
      })
      .catch(e => {
        console.log('Connection error', e)
      })
  }

  useEffect(() => {
   // getRestaurantsFromYelp();
    if (restaurantData == "") {
      getRestaurantsFromYelp();
    } else {
      setRestaurantTransaction()
    }
  }, [city, activeTab]);

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city]);

  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
        <View style={{ backgroundColor: "white", padding: 15 }}>
            <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            <SearchBar cityHandler={setCity} />
        </View>
        <ScrollView showsHorizontalScrollIndicator={false}>
          <Categories />
          <RestaurantItems restaurantData={restaurantData} />
          <View>
            {(() => {
              if (restaurantData == ""){
                return (
                  <Text
                    style={{
                      fontSize: "25px",
                      fontWeight: 700,
                      display: "flex",
                      justifyContent: "center"
                    }}
                  >
                    Not Available!
                  </Text>
                )
              }
            })()}
          </View>
        </ScrollView>
        <Divider  width={1} />
        <BottomTabs />
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

