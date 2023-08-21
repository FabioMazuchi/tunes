import { MusicType } from "../types";

export const getMusics = async (id: string) => {
	const request = await fetch(`https://itunes.apple.com/lookup?id=${id}&entity=song`);

	const { results } = await request.json();
	
	const response = results.map(
		({
			artistName,
			artworkUrl100,
			collectionName,
			previewUrl,
			trackId,
			trackNumber,
			kind,
			trackName,
		}: MusicType) => ({
			artistName,
			artworkUrl100,
			collectionName,
			previewUrl,
			trackId,
			trackNumber,
			kind,
			trackName,
		}),	
	);
	return response;
};

