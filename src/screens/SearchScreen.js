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
import ListItemSearch from "../components/ListItemSearch"

export default function SearchScreen() {
	const [datas, set_datas] = useState([])
	const [take_text, set_take_text] = useState("")

	const handleSearchText = (text) => {
		SearchMovie(text).then((data) => {
			set_datas(data)
		})
	}

	let renderItem = (item) => {
		return <ListItemSearch datas={item} />
	}

	return (
		<View>
			<Search handleSearch={handleSearchText}/>
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
