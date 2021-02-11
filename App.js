import { StatusBar } from "expo-status-bar";
import React from "react";
//import Search_page from "./src/pages/Search_page";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigator from './src/components/BottomNavigator';

export default function App() {
	return (
		<NavigationContainer>
      		<BottomNavigator/>
    	</NavigationContainer>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
})
