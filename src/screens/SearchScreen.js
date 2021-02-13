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

	const handleSearchText = (text) => {
		SearchMovie(text).then((data) => {
			set_datas(data)
		})
	}

	let renderItem = (item) => {
		return <Render_item_flatList datas={item} />
	}

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
