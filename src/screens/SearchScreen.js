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
import ListItem from "../components/ListItem"

export default function SearchScreen({ navigation }) {
	const [datas, set_datas] = useState([])

	const handleSearchText = (text) => {
		SearchMovie(text).then((data) => {
			set_datas(data)
		})
	}
	return (
		<View style={styles.main_container}>
			<View style={styles.search_container}>
				<Search handleSearch={handleSearchText} />
			</View>

			<SafeAreaView style={styles.safeAreaView_container}>
				<FlatList
					style={styles.flatlist_container}
					data={datas.results}
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
		</View>
	)
}
const styles = StyleSheet.create({
	main_container: {
		width: "100%",
		flex: 1,
		alignItems: "center",
		justifyContent: "flexStart",
	},
	search_container: {
		width: "100%",
		backgroundColor: "red",
	},
	safeAreaView_container: {
		flex: 1,
	},
	flatlist_container: {
		width: "100%",
		height: "100%",
	},
	film_button: {
		width: "80%",
	},
})
