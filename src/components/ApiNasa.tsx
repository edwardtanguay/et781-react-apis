/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react"
import { ApiCard } from "./ApiCard";
import { initialNasaData, NasaData } from "../types";

export const ApiNasa = () => {
	const [nasaData, setNasaData] = useState(initialNasaData);

	const key = import.meta.env.VITE_NASA_KEY;

	const handleFetchApodData = () => {
		(async () => {
			const url = `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${nasaData.date}`;
			const response = await fetch(url);
			const data = await response.json();
			const _nasaData = structuredClone(nasaData) as NasaData;
			_nasaData.explanation = data.explanation;
			_nasaData.imageUrl = data.url;
			setNasaData(_nasaData);
		})();
	}

	const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		const _nasaData = structuredClone(nasaData) as NasaData;
		_nasaData.date = value;
		setNasaData(_nasaData);
	}

	return (
		<ApiCard cardWidth="30rem">
			<input value={nasaData.date} onChange={(e) => handleDateChange(e)} /> <button onClick={handleFetchApodData} >Get astronomy picture</button>
			<p><img src={nasaData.imageUrl} /></p>
			<p>{nasaData.explanation}</p>
		</ApiCard>
	)
}