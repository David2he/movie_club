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

export function findGenresMovies(searchText, page) {
	return fetch(
		getApiUrl(`/discover/movie/`, {
			query: searchText,
			language: "fr-FR",
			page: page,
		})
	).then((result) => result.json())
}
