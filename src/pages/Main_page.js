import React, { useState, useEffect } from "react"
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native"
import { find_genres } from "../services/Search_Api"

export default function Main_page() {
	const [datas, setDatas] = useState([])

	useEffect(() => {
		find_genres().then((data) => {
			setDatas(data)
		})
	}, [])

	let renderItem = (item) => {
		return (
			<View style={styles.cards}>
				<Text style={styles.textCards}>{item.name}</Text>
			</View>
		)
	}

	console.log(datas.genres)
	return (
		<View>
			<SafeAreaView>
				<FlatList
					data={datas.genres}
					renderItem={({ item }) => renderItem(item)}
					keyExtractor={(item) => item.id.toString()}
				/>
			</SafeAreaView>
		</View>
	)
}

const styles = StyleSheet.create({
	cards: {
		width: "100%",
		height: 40,
		textAlign: "center",
	},
})
