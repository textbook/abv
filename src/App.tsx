import { ChangeEventHandler, useState } from "react";

import "./App.scss";

const FACTOR = 2.5 / 29.57;

function App() {
	const [data, setData] = useState({ abv: 0, volume: 0 });
	const calories = Math.round(data.abv * data.volume * FACTOR);

	const changeHandler: ChangeEventHandler<HTMLInputElement> = ({ target: { name, value } }) => {
		setData({ ...data, [name]: parseFloat(value) });
	};

	return (
		<div className="container" role="main">
			<label>
        ABV (%)
				<input
					name="abv"
					onChange={changeHandler}
					type="number"
					value={data.abv}
				/>
			</label>

			<label>
        Volume (ml)
				<input
					name="volume"
					onChange={changeHandler}
					type="number"
					value={data.volume}
				/>
			</label>

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
}

export default App;
