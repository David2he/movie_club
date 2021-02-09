import React, { useState, useEffect } from "react"
import { StyleSheet, Text, View } from "react-native"
import { search_movie } from "../services/Search_Api"
import Search from "../components/Search"

export default function Search_page() {
	return (
		<View>
			<Search style={styles.main_container} />
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
