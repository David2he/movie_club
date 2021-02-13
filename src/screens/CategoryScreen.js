import React, { useState, useEffect } from "react"
import { View, StyleSheet, Text, SafeAreaView, TouchableOpacity, Image } from "react-native"
import RenderItemFlatList from "../components/Render_item_flatList"
import { findGenresMovies } from "../services/Search_Api"

export const CategoryScreen = (props) => {
	const [datas, setDatas] = useState([])
	const genres = `Action`
	console.log(genres);

	useEffect(() => {
		findGenresMovies(genres, 2).then((data) => {
			setDatas(data)
			console.log(data)
		})
	}, [])

	const test = (test) => {
		console.log(test)
	}

	return (
		<View style={styles.main_container}>
			<View style={styles.title_container}>
				<Text style={styles.category_title}>Aventure</Text>
			</View>
			<SafeAreaView style={styles.flatlist_container}>
				<TouchableOpacity
					style={styles.cards}
				>
					<Text style={styles.textCards}>{test.original_title}</Text>
					<Text style={styles.textCards}>{test.release_date}</Text>
					<Text style={styles.textCards}>{test.vote_average}</Text>
					<Image
						style={styles.logo}
						source={{
							uri: `https://image.tmdb.org/t/p/original/${test.poster_path}`,
						}}
					/>
				</TouchableOpacity>
			</SafeAreaView>
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
	title_container: {
		height: 60,
		width:"100%",
		paddingVertical: 10,
		backgroundColor: "#B00020",
		borderBottomLeftRadius: 40,
		borderBottomRightRadius: 40,
	},
	category_title: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center",
		color: "#B5A90F",
		fontSize: 24,
	},
	flatlist_container: {
		width:"100%",
		height: "100%",
	},
	film_button: {
		width: "80%",
	},
	cards: {
		width: "90%",
		height: 120,
		marginTop: 24,
		marginHorizontal: "5%",
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
