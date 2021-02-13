import { getApiUrl } from "./Api_configure"

export function SearchMovie(searchText, page) {
	return fetch(
		getApiUrl(`/search/movie`, {
			query: searchText,
			language: "fr-FR",
			page: page,
		})
	).then((result) => result.json())
}

export function FindCategory() {
	return fetch(
		getApiUrl(`/genre/movie/list`, {
			language: "fr-FR",
		})
	).then((result) => result.json())
}

export function findGenreMovies(genre, page) {
	return fetch(
		getApiUrl("/discover/movie", {
			with_genres: genre,
			language: "fr-FR",
			page: page,
		})
	).then((result) => result.json())
}
export function detailledMovies(searchText) {
	return fetch(
		getApiUrl(`/movie/${searchText}`, {
			language: "fr-FR",
		})
	).then((result) => result.json())
}
