import React from 'react';
import {View, StyleSheet, Text, Image } from "react-native";

export const CategoryScreen = (props) => {
    return (
        <View style={styles.main_container}>
            <Text style={styles.category_title}>Aventure</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    main_container: {
        backgroundColor: '#B00020',
        paddingVertical: 20,
    },
    category_title: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#B5A90F',
        fontSize: 24,
    }
})
