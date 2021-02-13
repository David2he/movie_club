import React, { useState } from "react"
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	FlatList,
	Image,
} from "react-native"
import { SearchMovie } from "../services/Search_Api"
import Search from "../components/Search"
import Render_item_flatList from "../components/Render_item_flatList"

export default function SearchScreen() {
	const [datas, set_datas] = useState([])
	const [take_text, set_take_text] = useState("")

	const test = () => {
		SearchMovie(take_text).then((data) => {
			set_datas(data)
		})
	}

	const handleSearchText = (text) => {
		set_take_text(text)
		test()
	}

	let renderItem = (item) => {
		console.log(item)
		return <Render_item_flatList test={item} />
	}

	console.log(datas)
	// console.log(take_text)
	return (
		<View>
			<Search handleSearch={handleSearchText} style={styles.main_container} />
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
		width: 100,
		height: 50,
		backgroundColor: "#B00020",
	},
	cards: {
		width: "100%",
		height: 100,
		margin: 40,
		textAlign: "center",
		backgroundColor: "#B00020",
	},
	textCards: {
		color: "black",
	},
	logo: {
		width: 50,
		height: 50,
	},
})
