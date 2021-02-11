import React from "react"
import { StyleSheet, Text, View, Image } from "react-native"

export default function Render_item_flatList(props) {
	const { test } = props
	return (
		<View style={styles.cards}>
			<Text style={styles.textCards}>{test.original_title}</Text>
			<Text style={styles.textCards}>{test.release_date}</Text>
			<Text style={styles.textCards}>{test.vote_average}</Text>
			<Image
				style={styles.logo}
				source={{
					uri: `https://image.tmdb.org/t/p/original/${test.poster_path}`,
				}}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	main_container: {
		width: 100,
		height: 50,
		backgroundColor: "red",
	},
	cards: {
		width: "100%",
		height: 100,
		margin: 40,
		textAlign: "center",
		backgroundColor: "red",
	},
	textCards: {
		color: "black",
	},
	logo: {
		width: 50,
		height: 50,
	},
})
