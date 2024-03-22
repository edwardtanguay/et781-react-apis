/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react"
import { ApiCard } from "./ApiCard";

export const ApiNasa = () => {
	const [date, setDate] = useState('2024-01-01');
	const [explanation, setExplanation] = useState('');
	const [imageUrl, setImageUrl] = useState('');

	const key = import.meta.env.VITE_NASA_KEY;

	const handleFetchApodData = () => {
		(async () => {
			const url = `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${date}`;
			const response = await fetch(url);
			const data = await response.json();
			const _explanation = data.explanation;
			const _imageUrl = data.url;
			setExplanation(_explanation);
			setImageUrl(_imageUrl);
			console.log(data);
		})();
	}

	return (
		<ApiCard cardWidth="30rem">
			<input value={date} onChange={(e) => setDate(e.target.value)} /> <button onClick={handleFetchApodData} >Get astronomy picture</button>
			<p><img src={imageUrl}/></p>
			<p>{explanation}</p>
		</ApiCard>
	)
}