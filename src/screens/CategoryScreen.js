import React, { useState, useEffect, useLayoutEffect } from "react"
import { StyleSheet, SafeAreaView, FlatList } from "react-native"
import ListItem from "../components/ListItem"
import { findGenreMovies } from "../services/Search_Api"

export const CategoryScreen = (props) => {
	const [datas, setDatas] = useState([])
	const { navigation, route } = props

	useLayoutEffect(() => {
		navigation.setOptions({
			title:
				route && route.params && route.params.name
					? route.params.name
					: "Category",
		})
	})
	useEffect(() => {
		findGenreMovies(route.params.id, 1).then((data) => {
			setDatas(data.results)
			console.log(data)
		})
	}, [])

	return (
		<SafeAreaView style={styles.main_container}>
			<FlatList
				style={styles.flatlist_container}
				data={datas}
				renderItem={({ item }) => (
					<ListItem
						datas={item}
						details={() =>
							navigation.navigate("DetailledMovie", {
								id: item.id,
								genre: item.genre_ids[0],
							})
						}
					/>
				)}
				keyExtractor={(item) => item.id.toString()}
			/>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	main_container: {
		flex: 1,
		backgroundColor: "#F4F4F4",
		alignItems: "center",
		justifyContent: "flexStart",
	},
	flatlist_container: {
		width: "100%",
		height: "100%",
	},
	film_button: {
		width: "80%",
	},
})
