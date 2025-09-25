type FromProps = {
	setCity: React.Dispatch<React.SetStateAction<string>>
	getWeather: (e: React.FormEvent<HTMLFormElement>) => void
}


const Form = (props: FromProps) => {
	return (
		<>
			<p>ローマ字で都市の名前を入れてから、Get Weatherボタンをクリックしてください。<br />数秒後にその都市の現在の天候が表示されます。</p>
			<form onSubmit={props.getWeather}>
				<input type="text"
					name="city"
					placeholder="City Name"
					onChange={e => props.setCity(e.target.value)} />


				<button type="submit">Get Weather</button>
			</form>
		</>
	)
}
export default Form
