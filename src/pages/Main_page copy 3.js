import React, { Component } from "react"
import {
	Text,
	StyleSheet,
	View,
	Button,
	FlatList,
	SafeAreaView,
} from "react-native"
import { find_genres } from "../services/Search_Api"

export default class List_genre extends Component {
	constructor(props) {
		super(props)
		this.state = {
			datas: [],
		}
	}

	renderItem = (item) => {
		console.log("pute")
		return (
			<View style={styles.test}>
				<Text>{item.name}</Text>
			</View>
		)
	}

	setDataGenres = () => {
		find_genres().then((data) => {
			this.setState({ datas: data })
			// console.log(this.state.datas.genres)
			this.testFlatList()
		})
	}

	testFlatList = () => {
		console.log(this.state.datas.genres)
		return (
			<SafeAreaView>
				<FlatList
					data={this.state.datas.genres}
					renderItem={({ item }) => renderItem(item)}
					keyExtractor={(item) => item.id.toString()}
					// onEndReachedThreshold={0.5}
				/>
			</SafeAreaView>
		)
	}

	render() {
		return (
			<View>
				<SafeAreaView>
				<FlatList
					data={this.state.datas.genres}
					renderItem={({ item }) => renderItem(item)}
					keyExtractor={(item) => item.id.toString()}
					// onEndReachedThreshold={0.5}
				/>
			</SafeAreaView>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	test: {
		width: 120,
		height: 50,
		backgroundColor: "red",
	},
})
