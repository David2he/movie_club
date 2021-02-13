import React, { useState, useEffect } from "react"
import {
	StyleSheet,
	Text,
	View,
	Image,
	SafeAreaView,
	FlatList,
} from "react-native"

export default function RenderItemFlatList(props) {
	const { datas } = props
	console.log(datas)

	return (
		<SafeAreaView style={styles.cards}>
			<Text style={styles.textCards}>{datas.original_title}</Text>
			<Text style={styles.textCards}>{datas.release_date}</Text>
			<Text style={styles.textCards}>{datas.vote_average}</Text>
			<Image
				style={styles.logo}
				source={{
					uri: `https://image.tmdb.org/t/p/original/${datas.poster_path}`,
				}}
			/>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	main_container: {
		width: 100,
		height: 50,
		backgroundColor: "#B00020",
	},
	cards: {
		width: "40%",
		marginTop: 24,
		marginHorizontal: "5%",
		paddingVertical: 20,
		textAlign: "center",
		backgroundColor: "#fff",
		shadowColor: "#B00020",
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.7,
		shadowRadius: 4,
		elevation: 3,
	},
	textCards: {
		color: "black",
	},
	logo: {
		width: 50,
		height: 50,
	},
})
