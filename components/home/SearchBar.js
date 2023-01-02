import { View, Text, FlatList, TextInput, StyleSheet } from 'react-native'
import React, { useState, useEffect} from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons  from "react-native-vector-icons/Ionicons";
import AntDesign  from "react-native-vector-icons/AntDesign";

const NOMINATIM_BASE_URL = 'https://nominatim.openstreetmap.org/search?'

export const searchedRestaurants = [];

export default function SearchBar({cityHandler}) {

    const [text, onChangeText] = useState("");
    const [searchResults, setSearchResults] = useState(searchedRestaurants);

    const setCity = (city) => {
        cityHandler(city); 
        setSearchResults("")
    }
    
    useEffect(() => {
        const params = {
            q: text,
            format: 'json',
            addressdetails: 1,
            polygon_geojson: 0
        }
        const queryString = new URLSearchParams(params).toString()
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        }
        fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
            .then((response) => response.text())
            .then((result) => {
                setSearchResults(JSON.parse(result).slice(0,5) )
            })
            .catch((err) => console.log('err: ', err))
    }, [text]);

  return (
    <View 
        style={{
            marginTop: 15
        }} 
    >
        <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            
            value={text}
        />
        <View style={styles.container}>
                {(() => {
                    if (text != ""){
                        return (
                            <FlatList
                                data={searchResults}
                                renderItem={({ item }) => {
                                    return <Text onPress={() => setCity(searchResults[0].address.city ? searchResults[0].address.city : searchResults[0].address.town ? searchResults[0].address.town : "Magdeburg")  } style={styles.item}>{item.display_name}</Text>;
                                }}
                            />
                        )
                    }
                    return null;
                })()}
        </View>
        {/*
        <GooglePlacesAutocomplete
            placeholder='Search'
            renderLeftButton={() => (
                <View style={{ marginLeft: 10 }}>
                    <Ionicons name="location-sharp" size={24} />
                </View>
            )}
            
            renderRightButton={() => (
                <View 
                    style={{ 
                        flexDirection: "row", 
                        marginRight: 8, 
                        backgroundColor: "white",
                        padding: 9,
                        borderRadius: 30,
                        alignItems: "center"
                    }}
                >
                    <AntDesign name="clockcircle" size={11} style={{ marginRight: 6 }} />
                    <Text> Search </Text>
                </View>
            )}

            styles={{
                textInputContainer: {
                    backgroundColor: '#eee',
                    borderRadius: 50,
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: 0
                },
                textInput: {
                    backgroundColor: "#eee",
                    borderRadius: 20,
                    fontWeight: "700",
                    marginTop: 7,
                    marginRight: 8
                }
            }} 
        />
        */}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10
    },
    item: {
        padding: 10,
        fontSize: 12,
        height: 44,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 30
    },
  });