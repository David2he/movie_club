import React, { useState, useEffect } from "react"
import {
	View,
	StyleSheet,
	Text,
	Image,
	Button,
	SafeAreaView,
	FlatList,
	ScrollView,
} from "react-native"
import RenderItemFlatList from "../components/Render_item_flatList"
import { Ionicons } from "@expo/vector-icons"
import { findGenresMovies } from "../services/Search_Api"

export const CategoryScreen = (props) => {
	const [datas, setDatas] = useState([])
	// const setGenreSearch = "&with_grenres="
	const genres = "Action"

	useEffect(() => {
		findGenresMovies(genres, 2).then((data) => {
			setDatas(data)
			// console.log(data)
		})
	}, [])

	const renderItem = (item) => {
		return <RenderItemFlatList test={item} />
	}

	return (
		<View style={styles.main_container}>
			<Text style={styles.category_title}>Aventure</Text>
			<SafeAreaView style={styles.test}>
				<FlatList
					data={datas.results}
					renderItem={({ item }) => renderItem(item)}
					keyExtractor={(item) => item.id.toString()}
				/>
			</SafeAreaView>
		</View>
	)
}

const styles = StyleSheet.create({
	main_container: {
		backgroundColor: "#B00020",
		paddingVertical: 20,
	},
	category_title: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center",
		color: "#B5A90F",
		fontSize: 24,
	},
	test: {
		flex: 1,
		alignItems: "spaceBetween",
		width: "100%",
		marginTop: 20,
	},
})
