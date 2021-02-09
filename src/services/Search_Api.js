import { getApiUrl } from "./Api_configure"

export function search_movie(searchText, page) {
	return fetch(
		getApiUrl(`/search/movie`, {
			query: searchText,
			language: "fr-FR",
			page: page,
		})
	).then((result) => result.json())
}

export function find_genres() {
	return fetch(
		getApiUrl(`/genre/movie/list`, {
			language: "fr-FR",
		})
	).then((result) => result.json())
}
