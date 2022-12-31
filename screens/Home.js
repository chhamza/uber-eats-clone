import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView, StyleSheet, Platform, StatusBar, ScrollView } from "react-native";
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import RestaurantItems from '../components/RestaurantItems';

export default function Home() {
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
        <View style={{ backgroundColor: "white", padding: 15 }}>
            <HeaderTabs />
            <SearchBar />
        </View>
        <ScrollView showsHorizontalScrollIndicator={false}>
          <Categories />
          <RestaurantItems />
          <RestaurantItems />
          <RestaurantItems />
          <RestaurantItems />

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

