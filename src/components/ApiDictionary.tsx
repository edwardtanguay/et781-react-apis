/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react"

export const ApiDictionary = () => {
	const [word, setWord] = useState('test');

	// const handleFetchQuote = () => {
	// 	(async () => {
	// 		const url = 'https://zenquotes.io/api/random';
	// 		const headers = {
	// 			"Access-Control-Allow-Origin": "*",
	// 			'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
	// 			mode: 'no-cors'
	// 		};
	// 		// const response = await fetch(url, {headers});
	// 		// const data = await response.json();
	// 		const response = await axios.post(url, {headers});
	// 		const data = response.data;
	// 		console.log(data);
	// 	})();
	// }

	return (
		<div className="bg-gray-300 p-6 rounded-lg w-[20rem] flex flex-col gap-4 shadow-md shadow-slate-500">
			<input value={word} onChange={(e) => setWord(e.target.value)} /> <button>Get definition</button>
			<p>definition</p>
		</div>
	)
}