import React, { useState } from "react"
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	FlatList,
	Image,
	Button,
} from "react-native"
import { find_genres_movies } from "../services/Search_Api"
import Render_item_flatList from "../components/Render_item_flatList"

export default function Search_page() {
	const [datas, set_datas] = useState([])
	// const [take_text, set_take_text] = useState("")
	const set_genre_search = "&with_grenres="
	const genres = `${set_genre_search}Fantastique`

	const test = () => {
		find_genres_movies(genres, 4).then((data) => {
			set_datas(data)
		})
	}

	let renderItem = (item) => {
		console.log(item)
		return <Render_item_flatList test={item} />
	}

	console.log(datas)
	// console.log(take_text)
	return (
		<View>
			<SafeAreaView>
				<FlatList
					data={datas.results}
					renderItem={({ item }) => renderItem(item)}
					keyExtractor={(item) => item.id.toString()}
				/>
			</SafeAreaView>
			<Button onPress={() => test()}></Button>
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
