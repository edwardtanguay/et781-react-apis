import { ApiDictionary } from "../components/ApiDictionary"
import { ApiNasa } from "../components/ApiNasa"

export const PageWelcome = () => {
	return (
		<div className="flex gap-4 flex-wrap items-start">
			<ApiDictionary />
			<ApiNasa />
		</div>
	)
}