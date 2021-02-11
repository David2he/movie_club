import React, { Component } from "react"
import { Text, StyleSheet, View, Image } from "react-native"
import { find_genres } from "../services/Search_Api"

export default class List_movie extends React.Component {
	constructor(props) {
		super(props)
		this.props = props
		this.state = {
			items: props.slice.items.filter(
				(movie, index) => index < props.slice.primary.max_display
			),
			poster: props.slice.items.poster,
			name: props.slice.items.name,
			date: props.slice.items.date,
			director: props.slice.items.director,
			grade: props.slice.items.grade,
		}
	}

	render() {
		return (
			<View style={styles.main_container} className="main_container">
				<MenuLinks items={this.state.items} />
			</View>
		)
	}

	MenuLinks = ({ items }) => {
		if (items) {
			return (
				<ul>
					{items.map((main_container, index) => (
						<MenuLink menuLink={clients} key={`movielink-${index}`} />
					))}
				</ul>
			)
		}
		return null
	}

	MenuLink = ({ menuLink }) => (
		<View style={styles.movie} className="movie">
			<Image
				alt={menuLink.poster}
				src={menuLink.poster}
				style={styles.poster}
			></Image>
			<Text style={styles.name}>{menuLink.name}</Text>
			<Text style={styles.date}>{menuLink.date}</Text>
			<Text style={styles.date}>{menuLink.director}</Text>
			<Text style={styles.grade}>{menuLink.grade}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	main_container: {
		width: "100%",
		padding: 30,
		backgroundColor: "#fd4556",
		borderBottomLeftRadius: 15,
		borderBottomRightRadius: 15,
	},

	movie: {
		width: "90%",
		padding: 0,
	},

	poster: {
		height: "100%",
		width: "15%",
		marginRight: "5%",
	},

	name: {
		color: "#cdcd0d",
		fontSize: 16,
		padding: "1% 0",
	},

	date: {
		color: "#cdcd0d",
		fontSize: 12,
		padding: "1% 0",
	},

	grade: {
		color: "#8B0000",
		fontSize: 16,
		padding: "5%",
		float: right,
	},
})
