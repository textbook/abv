import { ChangeEventHandler, FC, useState } from "react";

import "./App.scss";
import NumericInput from "./NumericInput";

const FACTOR = 2.5 / 29.57;

interface AppState {
	abv: number;
	volume: number;
}

const App: FC = () => {
	const [data, setData] = useState<AppState>({ abv: 0, volume: 0 });
	const calories = Math.round(data.abv * data.volume * FACTOR);

	const changeHandler: ChangeEventHandler<HTMLInputElement> = ({ target: { name, value } }) => {
		setData({ ...data, [name]: parseFloat(value) });
	};

	return (
		<div className="container" role="main">
			<NumericInput
				label="ABV (%)"
				name="abv"
				onChange={changeHandler}
				value={data.abv}
			/>

			<NumericInput
				label="Volume (ml)"
				name="volume"
				onChange={changeHandler}
				value={data.volume}
			/>

			<div className="buttons">
				{[330, 440, 568].map((volume) => (
					<button
						onClick={() => setData({ ...data, volume })}
						key={volume}
					>
						{volume}ml
					</button>
				))}
			</div>

			<label>
				Calories
				<input
					name="calories"
					readOnly
					type="text"
					value={Number.isNaN(calories) ? "0" : `${calories}`}
				/>
			</label>
		</div>
	);
};

export default App;
