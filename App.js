import { StatusBar } from "expo-status-bar"
import React from "react"
// import Main from "./src/pages/Main_page"
import Search_page from "./src/pages/Search_page"
import { StyleSheet, Text, View } from "react-native"

export default function App() {
	return (
		<View style={styles.container}>
			{/* <Main /> */}
			<Search_page style={styles.main_container} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	main_container: {
		height: 120,
		width: 80,
		backgroundColor: "yellow",
	},
})
