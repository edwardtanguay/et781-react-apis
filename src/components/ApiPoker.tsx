/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react"
import { ApiCard } from "./ApiCard";
import axios from 'axios';
import { initialDeckData } from "../types";

export const ApiPoker = () => {
	const [deckData, setDeckData] = useState(initialDeckData);

	const handleFetchPokerHand = () => {
		(async () => {
			const deckUrl = 'https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'; 
			const response = await axios.get(deckUrl);
			const data = await response.data;
		console.log(data);
		})();
	}

	return (
		<ApiCard cardWidth="40rem">
			<button onClick={handleFetchPokerHand} >Deal poker hand</button>
			<div className="flex gap-1">
				<div><img src={deckData.card1url}/></div>
				<div><img src={deckData.card2url}/></div>
				<div><img src={deckData.card3url}/></div>
				<div><img src={deckData.card4url}/></div>
				<div><img src={deckData.card5url}/></div>
			</div>
		</ApiCard>
	)
}