import React, { useState, useEffect } from "react"
import { StyleSheet, Text, View } from "react-native"
import { search_movie } from "../services/Search_Api"
import Search from "../components/Search"

export default function Search_page() {
	const [datas, set_datas] = useState([])
	const [take_text, set_take_text] = useState("")

	useEffect(() => {
		search_movie().then((data) => {
			set_datas(data)
		})
	}, [])

	const handleSearchText = (text) => {
		set_take_text(text)
	}
	console.log(datas)
	console.log(take_text)
	return (
		<View>
			<Search handleSearch={handleSearchText} style={styles.main_container} />
		</View>
	)
}

const styles = StyleSheet.create({
	main_container: {
		width: 100,
		height: 50,
		backgroundColor: "red",
	},
})
