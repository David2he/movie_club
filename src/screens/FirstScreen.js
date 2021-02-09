import React from 'react';
import {View, StyleSheet } from "react-native";
import LogoImage from '../src/components/LogoImage';

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
        </View>

    )
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: 20,
        paddingHorizontal: 50,
        justifyContent: 'flex-start',
        alignItems: 'center',
    }
})
