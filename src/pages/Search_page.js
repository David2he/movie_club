import React, { useState } from "react"
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	FlatList,
	Image,
} from "react-native"
import { search_movie } from "../services/Search_Api"
import Search from "../components/Search"

export default function Search_page() {
	const [datas, set_datas] = useState([])
	const [take_text, set_take_text] = useState("")

	const test = () => {
		search_movie(take_text).then((data) => {
			set_datas(data)
		})
	}

	const handleSearchText = (text) => {
		set_take_text(text)
		test()
	}

	let renderItem = (item) => {
		console.log(item)
		return (
			<View style={styles.cards}>
				<Text style={styles.textCards}>{item.original_title}</Text>
				<Text style={styles.textCards}>{item.release_date}</Text>
				<Image
					style={styles.logo}
					source={{
						uri: `https://image.tmdb.org/t/p/original/${item.poster_path}`,
					}}
				/>
			</View>
		)
	}

	// console.log(datas)
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
