import React from 'react';
import {View, StyleSheet } from "react-native";
import LogoImage from '../components/LogoImage';
import FlatList from "../components/FlatList";


export const LaunchScreen = (props) => {
    const {navigation} = props;
    const handlePressButton = (type) => {
        type === 'search' ?
            navigation.navigate('Recherche', {screen: 'Search'}) :
            navigation.navigate('Latest')
    }
    return (
        <View style={styles.main_container}>
            <LogoImage/>
			<FlatList onPressItem={(item) => navigation.navigate('MoviesListScreen', {name: item.name, id: item.id})}/>
			{/* <Search_page style={styles.main_container} /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    }
})
