import React from "react"
import { Text, TouchableOpacity, StyleSheet, Image, View } from "react-native"

export default function ListItem(props) {
	const { datas, details } = props

	return (
		<TouchableOpacity style={styles.cards} onPress={details}>
			<Image
				style={styles.imageMovie}
				source={{
					uri: `https://image.tmdb.org/t/p/original/${datas.poster_path}`,
				}}
			/>
			<View style={styles.containerTextCards}>
				<Text style={styles.titleCards}>{datas.original_title}</Text>
				<Text style={styles.textCards}>{datas.release_date}</Text>
				<Text style={styles.voteCards}>{datas.vote_average}</Text>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	cards: {
		position: "relative",
		height: 130,
		justifyContent: "center",
		margin: 15,
		shadowColor: "#B00020",
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.7,
		shadowRadius: 4.0,
		elevation: 5,
	},
	imageMovie: {
		position: "absolute",
		height: "100%",
		width: 80,
	},
	containerTextCards: {
		marginLeft: 100,
	},
	titleCards: {
		fontSize: 15,
		color: "#B5A90F",
		fontWeight: "bold",
		marginBottom: 10,
	},
	voteCards: {
		position: "absolute",
		top: 15,
		right: 15,
		fontWeight: "bold",
		color: "#B00020",
	},
})
