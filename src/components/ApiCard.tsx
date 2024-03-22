import { ReactNode } from "react"

interface IProps {
	children: ReactNode;
	cardWidth?: string;
}

export const ApiCard = ({ children, cardWidth = '50rem'}: IProps) => {
	return (
		<div style={{width: cardWidth}} className="bg-gray-300 border-gray-500 border p-6 rounded-lg flex flex-col gap-4 shadow-md shadow-slate-500">
			{children}
		</div>
	)
}