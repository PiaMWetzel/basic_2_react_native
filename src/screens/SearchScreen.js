import React, {useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import SearchBar from '../components/SearchBar'
const SearchScreen = () => {
    const [term, setTerm] = useState("");
    return(
<View>
    <SearchBar term = {term} onTermChange = {(newTerm) => setTerm(newTerm) }/>
    <Text>This is the search screen</Text>
    <Text>{term}</Text>
</View>
)};

const stles = StyleSheet.create({

});

export default SearchScreen;