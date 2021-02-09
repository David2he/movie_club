import React, { Component } from "react"
import { Text, StyleSheet, View } from "react-native"
import { find_genres } from "../services/Search_Api"

export default class List_genre extends Component {
	constructor(props) {
		super(props)
		this.state = {
			datas: [],
		}
	}

	setData = () => {
		searchMovie().then((data) => {
			this.setState({ datas: data })
			console.log(this.state.datas)
		})
	}

	render() {
		return (
			<View>
				<Text> textInComponent </Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({})
