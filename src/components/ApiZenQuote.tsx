/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react"

export const ApiZenQuote = () => {
	const [quote, setQuote] = useState('Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi rerum illum voluptatem numquam, exercitationem mollitia harum quaerat maiores inventore in. Quos nesciunt nihil fugiat repellendus aliquam harum ullam. Vero, aspernatur.');
	const [author, setAuthor] = useState('Zen');

	const handleFetchQuote = () => {
		alert('fetching')
	}

	return (
		<div className="bg-gray-300 p-6 rounded-lg w-[20rem] flex flex-col gap-4 shadow-md shadow-slate-500">
			<button onClick={handleFetchQuote}>Display a random quote</button>
			<p><span className="italic">"{quote}"</span> - {author}</p>
		</div>
	)
}