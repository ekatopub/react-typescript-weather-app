// App.tsx
import { useActionState } from "react"
import Title from "./components/Title";
import FormReact19 from "./components/FormReact19";
import ResultsReact19 from "./components/ResultsReact19";
import Loading from "./components/Loading";


const AppReact19 = () => {

	const getWeather = (_prevState: string, formData: FormData) => {
		// _prevState は前回の returnedData（初期値は ""）

		const city = formData.get("city")
		return fetch(`https://api.weatherapi.com/v1/current.json?key=5cdf68b877df41e7bec130301252409&q=${city}&aqi=no`)
			.then(res => res.json())

	}


	const [returnedData, formAction, isPending] = useActionState(getWeather, "")


	return (
		<div className="wrapper">
			<div className="container">
				<Title />
				<FormReact19 getWeather={formAction} />
				{isPending ? <Loading /> : <ResultsReact19 results={returnedData} />}
			</div>
		</div>
	)
}
export default AppReact19;

