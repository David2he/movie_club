import React, { useState, useEffect } from "react"
import {
	FlatList,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
} from "react-native"
import { FindCategory } from "../services/Search_Api"

export default function Main_page(props) {
	const [datas, setDatas] = useState([])

	useEffect(() => {
		FindCategory().then((data) => {
			setDatas(data)
		})
	}, [])
	const test = (test) => {
		console.log(test)
	}

	let renderItem = (item) => {
		return (
			<View style={styles.cards}>
				<TouchableOpacity
					style={styles.button}
					onPress={() => props.onPressItem(item)}
				>
					<Text style={styles.textCards}>{item.name}</Text>
				</TouchableOpacity>
			</View>
		)
	}

	// console.log(datas.genres)
	return (
		<SafeAreaView style={styles.main_container}>
			<FlatList
				data={datas.genres}
				numColumns={2}
				renderItem={({ item }) => renderItem(item)}
				keyExtractor={(item) => item.id.toString()}
			/>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	main_container: {
		flex: 1,
		alignItems: "spaceBetween",
		width: "100%",
		marginTop: 20,
	},
	cards: {
		width: "40%",
		marginTop: 24,
		marginHorizontal: "5%",
		paddingVertical: 20,
		textAlign: "center",
		backgroundColor: "#fff",
		shadowColor: "#B00020",
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.7,
		shadowRadius: 4,
		elevation: 3,
	},
	textCards: {
		color: "#B00020",
	},
})
