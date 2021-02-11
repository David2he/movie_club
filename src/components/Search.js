import React, { useState, useEffect } from "react"
import { StyleSheet, Text, View, TextInput, Button } from "react-native"
import { SearchPage } from "../services/Search_Api"

export default function SearchPage(props) {
	const [take_text, set_take_text] = useState("")

	const onChangeText = (text) => {
		set_take_text(text)
		props.handleSearch(text)
	}
	return (
		<View style={styles.main_container}>
			<View style={styles.input_container}>
				<TextInput
					style={styles.textinput}
					placeholder="test"
					onChangeText={onChangeText}
				/>
				<Text style={styles.text}>{take_text}</Text>
				<Button style={styles.button} title="Rechercher" />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	main_container: {
		width: "100%",
		padding: 30,
		backgroundColor: "#fd4556",
		borderBottomLeftRadius: 15,
		borderBottomRightRadius: 15,
	},
	input_container: {
		flexDirection: "row",
		backgroundColor: "#ffFf",
		borderRadius: 15,
		paddingLeft: 10,
		marginBottom: 10,
	},
	picto: {
		width: 25,
		height: 25,
	},
	textinput: {
		height: 50,
		paddingLeft: 10,
		width: "100%",
	},
	text: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",

		backgroundColor: "white",

		padding: 15,
		paddingLeft: 10,
		marginBottom: 10,
		borderRadius: 15,
	},
})
