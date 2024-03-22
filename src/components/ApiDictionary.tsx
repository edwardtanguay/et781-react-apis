/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react"
import { ApiCard } from "./ApiCard";

export const ApiDictionary = () => {
	const [word, setWord] = useState('');
	const [definition, setDefinition] = useState('');

	const handleFetchDefinition = () => {
		(async () => {
			const url = 'https://api.dictionaryapi.dev/api/v2/entries/en';
			const response = await fetch(`${url}/${word}`);
			const data = await response.json();
			const _definition = data[0].meanings[0].definitions[0].definition;
			setDefinition(_definition);
		})();
	}

	return (
		<ApiCard cardWidth="20rem">
			<input value={word} onChange={(e) => setWord(e.target.value)} /> <button onClick={handleFetchDefinition} >Get definition</button>
			<p>{definition}</p>
		</ApiCard>
	)
}