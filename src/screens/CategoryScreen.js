import React, { useState, useEffect } from "react"
import {
	View,
	StyleSheet,
	Text,
	Image,
	Button,
	SafeAreaView,
	FlatList,
} from "react-native"
import RenderItemFlatList from "../components/Render_item_flatList"
import { Ionicons } from "@expo/vector-icons"
import { findGenresMovies } from "../services/Search_Api"

export const CategoryScreen = (props) => {
	const [datas, setDatas] = useState([])
	const setGenreSearch = "&with_grenres="
	const genres = `${setGenreSearch}Action`

	useEffect(() => {
		findGenresMovies(genres, 1).then((data) => {
			setDatas(data)
		})
	}, [])

	const renderItem = (item) => {
		console.log(item)
		return <RenderItemFlatList test={item} />
	}

	return (
		<View style={styles.main_container}>
			<Text style={styles.category_title}>Aventure</Text>
			<SafeAreaView>
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
})
