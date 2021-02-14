import React, { useState, useEffect } from "react"
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from "react-native"
import { SearchMovie } from "../services/Search_Api"
import LogoImage from "./LogoImage"

export default function SearchPage(props) {
	const [take_text, set_take_text] = useState("")

	const onChangeText = (text) => {
		set_take_text(text)
		props.handleSearch(text)
	}
	return (
		<View style={styles.main_container}>
			<View>
				<LogoImage/>
			</View>
			<View style={styles.search_container}>
				<TextInput
					style={styles.input_container}
					placeholder="Titre film"
					onChangeText={onChangeText}
				/>
				<TouchableOpacity style={styles.button}>
					<Text style={styles.button_text}>Recherche</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	main_container: {
		flex: 1,
		backgroundColor: "#F4F4F4",
		alignItems: "center",
		justifyContent: "flexStart",
	},
	search_container: {
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		height: 120,
		marginTop: 44,
		backgroundColor: "#B00020",
		borderRadius: 20,
	},
	input_container: {
		width: "80%",
		height: 40,
		backgroundColor: "#ffFf",
		paddingLeft: 10,
		marginBottom: 10,
	},
	button: {
		width: "30%",
		height: 36,
		left: "25%",
		backgroundColor: "#B5A90F",
        color: 'black',
        padding: 8,
        paddingHorizontal: 16,
        borderRadius: 4,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.8,
        elevation: 6,
        shadowRadius: 15 ,
        shadowOffset : { width: 1, height: 13},
	},
	button_text: {
		textAlign: 'center',
        textTransform: 'uppercase',
        color: 'white',
	}
})
