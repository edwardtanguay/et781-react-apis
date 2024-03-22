export type NasaData = {
	date: string;
	explanation: string;
	imageUrl: string;
	title: string;
}

export const initialNasaData: NasaData = {
	date: '2024-02-01',
	explanation: '',
	imageUrl: '',
	title: ''
}

export type DeckData = {
	deckId: string;
	card1url: string;
	card2url: string;
	card3url: string;
	card4url: string;
	card5url: string;
}

export const initialDeckData: DeckData = {
	deckId: '',
	card1url: 'https://www.deckofcardsapi.com/static/img/back.png',
	card2url: 'https://www.deckofcardsapi.com/static/img/back.png',
	card3url: 'https://www.deckofcardsapi.com/static/img/back.png',
	card4url: 'https://www.deckofcardsapi.com/static/img/back.png',
	card5url: 'https://www.deckofcardsapi.com/static/img/back.png',
}