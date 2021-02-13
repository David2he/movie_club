import React from 'react'
import { Text, TouchableOpacity, StyleSheet, Image } from 'react-native'

export default function ListItem(props) {
    const {movie, onPress} = props
    
    return (
        <TouchableOpacity
            style={styles.cards}
            onPress={() => onPress(movie.id)}
		>
            <Image
				style={styles.logo}
				source={{
					uri: `https://image.tmdb.org/t/p/original/${movie.poster_path}`,
				}}
			/>
			<Text style={styles.titleCards}>{movie.original_title}</Text>
			<Text style={styles.dateCards}>{movie.release_date}</Text>
			<Text style={styles.voteCards}>{movie.vote_average}</Text>
		</TouchableOpacity>
    )
}

const styles = StyleSheet.create({
	cards: {
        flex: 1,
        justifyContent: "center",
        flexWrap: "wrap",
        width: "90%",
        paddingVertical: 36,
		marginTop: 24,
		marginHorizontal: "5%",
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
    titleCards: {
        marginLeft: 120,
        paddingVertical: 4,
        color: "#B5A90F",
        fontWeight: "bold",
	},
	dateCards: {
        marginLeft: 120,
        paddingVertical: 4,
        color: "#B5A90F",
    },
    voteCards: {
        position: "absolute",
        marginLeft: 300,
        color: "#B00020",
        fontWeight: "bold",
        fontSize: 16,
    },
	logo: {
        position: "absolute",
        left: 0,
		width: 100,
		height: "100%",
	},
})