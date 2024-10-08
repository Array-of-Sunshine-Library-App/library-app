import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SearchBar } from "@rneui/themed";


const ExploreSearchBar = ({searchQuery, setSearchQuery} : any) => {
    const [searchBarValue, setSearchBarValue] = useState("");
    
    const handleSubmit = () => {
        let trimmedSearchQuery = searchBarValue.trim().replaceAll(" ","+").toLowerCase()
        setSearchQuery(trimmedSearchQuery)
}

    return (
        <View>
            <SearchBar style={styles.searchBar} placeholder="Search for a book to add to your library" value={searchBarValue} onChangeText={setSearchBarValue} lightTheme={true} onSubmitEditing={handleSubmit}/>
        </View>
    )
}

const styles = StyleSheet.create({
    searchBar: {
      color: "black"
    }
  });

export default ExploreSearchBar