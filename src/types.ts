export type UserType = {
	name: string;
    image: string,
}

export type AlbumType = {
    artistId: number;
    artistName: string;
    collectionId: number;
    collectionName: string;
    collectionPrice: number;
    artworkUrl100: string;
    releaseDate: Date;
    trackCount: string;
}

export type AlbumProps = {
    album: AlbumType;
}

export type MusicType = {
    artistName: string;
    artworkUrl100: string;
    collectionName: string;
    previewUrl: string;
    trackId: number;
    trackNumber: number;
    kind: string;
    trackName: string;
}