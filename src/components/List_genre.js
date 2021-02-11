import React, { Component } from "react"
import { Text, StyleSheet, View } from "react-native"
import { find_genres } from "../services/Search_Api"

export default class List_genre extends Component {
	
	render() {
		return (
			<View style={styles.main_container}>
				<Text style={styles.text}>{find_genres}</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	main_container: {
		width: "100%",
		padding: 30,
		backgroundColor: "#fd4556",
		borderBottomLeftRadius: 15,
		borderBottomRightRadius: 15,
	},

	text: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",

		backgroundColor: "white",

		margin: "1% 2%",
	},
})
