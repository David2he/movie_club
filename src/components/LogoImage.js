import React from 'react'
import { View, StyleSheet, Image } from 'react-native'

export default function LogoImage() {
    return (
        <View style={styles.container}>
            <Image 
                style={styles.stretch}
                source={require('../../assets/images/logo.png')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 8,
        borderRadius: 200,
        borderColor: '#B00020',
        marginTop: 40,
    },
    stretch: {
      width: 150,
      height: 150,
      resizeMode: 'stretch',
    },
  });