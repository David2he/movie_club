import React, { useState, useEffect } from "react"
import { StyleSheet, Text, View } from "react-native"
import { MovieDetails, FindCategory } from "../services/Search_Api"

export default function Detailled_movie() {
	const [dataFilm, setDataFilm] = useState([])
	const [dataGenre, setDataGenre] = useState([])
	let initForInGenre = 0
	let the_genre = "Action"
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
		MovieDetails(14).then((data) => {
			setDataFilm(data)
		}),
			FindCategory().then((data) => {
				setDataGenre(data)
			})
	}, [])

	allGenres = dataGenre.genres
	for (initForInGenre in allGenres) {
		if (the_genre == allGenres[initForInGenre].name) {
			returnTheGenre = allGenres[initForInGenre].name
			console.log(returnTheGenre)
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

	console.log(timeConverted)
	return (
		<View>
			<View></View>
			<Text>{timeConverted}</Text>
		</View>
	)
}

const styles = StyleSheet.create({})
