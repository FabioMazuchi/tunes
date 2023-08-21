import { MusicType } from "../types";

export const readFavoriteMusic = (): MusicType[] => {
	const result = localStorage.getItem('favoriteMusics')
	if (!result) {
		localStorage.setItem('favoriteMusics', JSON.stringify([]));
		return [];
	} else {
		return JSON.parse(result);
	}
  }

export const saveFavoriteMusic = (music: MusicType) => {
	try {
		const favoritesMusic = readFavoriteMusic()
		favoritesMusic.push(music)
		localStorage.setItem('favoriteMusics', JSON.stringify(favoritesMusic));
	} catch (error) {
		console.log('vazio');
		localStorage.setItem('favoriteMusics', JSON.stringify([music]));
	}
}  

export const removeFavorite = (music: MusicType) => {
	const favoritesMusic = readFavoriteMusic();
	const filterFavorite = favoritesMusic.filter(({trackId}) => trackId !== music.trackId)
	localStorage.setItem('favoriteMusics', JSON.stringify(filterFavorite));
}