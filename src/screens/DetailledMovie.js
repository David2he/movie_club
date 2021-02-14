import React, { useState, useEffect } from "react"
import { StyleSheet, Text, View, ScrollView, Image } from "react-native"
import { detailledMovies, FindCategory } from "../services/Search_Api"

export default function DetailledMovie(props) {
	console.log(props)
	const [dataFilm, setDataFilm] = useState([])
	const [dataGenre, setDataGenre] = useState([])
	let initForInGenre = 0
	let the_genre = props.route.params.genre
	let allGenres = []

	let returnTheGenre = ""
	let theTitle = ""
	let theSummary = ""
	let theDuration = Number
	let theDurationConvertedHours = ""
	let theDurationConvertedMins = ""
	let timeConverted = ""
	let backgroundImage = ""
	let imageMovie = ""
	useEffect(() => {
		detailledMovies(props.route.params.id).then((data) => {
			setDataFilm(data)
		}),
			FindCategory().then((data) => {
				setDataGenre(data)
			})
	}, [])

	allGenres = dataGenre.genres
	for (initForInGenre in allGenres) {
		if (the_genre == allGenres[initForInGenre].id) {
			returnTheGenre = allGenres[initForInGenre].name
		}
	}

	theTitle = dataFilm.title
	theSummary = dataFilm.overview
	backgroundImage = dataFilm.backdrop_path
	imageMovie = dataFilm.poster_path

	theDuration = (Math.round((dataFilm.runtime / 60) * 100) / 100).toString()
	theDurationConvertedHours = theDuration.slice(0, 1)
	theDurationConvertedMins = theDuration.slice(2, 4)
	timeConverted = `${theDurationConvertedHours}h ${theDurationConvertedMins}`

	return (
		<View style={styles.container}>
			<ScrollView>
				<Image
					source={{
						uri: `https://image.tmdb.org/t/p/original${backgroundImage}`,
					}}
					style={styles.imageBackground}
				/>
				<View style={styles.movieContainer}>
					<View style={styles.headerImage}>
						<Image
							source={{
								uri: `https://image.tmdb.org/t/p/original${imageMovie}`,
							}}
							style={styles.image}
						/>
						<View style={styles.infoHeader}>
							<Text style={styles.title}>{theTitle}</Text>
							<Text style={styles.title}>{returnTheGenre}</Text>
							<Text style={styles.runtime}>{timeConverted}</Text>
						</View>
						<View style={styles.playButton}>
							{/* <Image
								source={require("../assets/play.png")}
								style={styles.logoPlay}
							/> */}
						</View>
					</View>
					<View style={styles.containerOverview}>
						<Text style={styles.synopsis}>Synopsis</Text>
						<Text style={styles.overviewMovie}>{theSummary}</Text>
					</View>
				</View>
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	imageBackground: {
		width: "100%",
		height: 380,
		resizeMode: "cover",
	},
	movieContainer: {
		display: "flex",
		flexDirection: "column",
		paddingLeft: 25,
		paddingRight: 25,
		zIndex: 1,
	},
	headerImage: {
		display: "flex",
		flexDirection: "row",
	},
	image: {
		borderColor: "#ffffff",
		borderRadius: 15,
		borderWidth: 4,
		height: 134,
		marginRight: 15,
		width: 84,
		top: -65,
	},
	infoHeader: {
		height: "60%",
		width: "55%",
		borderRadius: 15,
		backgroundColor: "#fff",
		padding: 10,
		top: -35,
	},
	logoPlay: {
		width: 40,
		height: 40,
		top: -18,
		marginLeft: 15,
	},
	containerOverview: {
		marginTop: -30,
	},
	title: {
		fontSize: 15,
		fontWeight: "bold",
		color: "#B5A90F",
		marginBottom: 15,
	},
	synopsis: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#B5A90F",
		marginBottom: 40,
	},
	overviewMovie: {
		fontSize: 16,
		lineHeight: 24,
		color: "#B5A90F",
	},
})
