import { ChangeEventHandler, useState } from "react";

const FACTOR = 2.5 / 29.57;

function App() {
  const [data, setData] = useState({ abv: 0, volume: 0 });
  const calories = Math.round(data.abv * data.volume * FACTOR);

  const changeHandler: ChangeEventHandler<HTMLInputElement> = ({ target: { name, value } }) => {
    setData({ ...data, [name]: parseFloat(value) });
  }

  return (
    <div>
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

      <button onClick={() => setData({ ...data, volume: 330 })}>330ml</button>
      <button onClick={() => setData({ ...data, volume: 440 })}>440ml</button>
      <button onClick={() => setData({ ...data, volume: 568 })}>568ml</button>

      <label>
        Calories
        <input
          name="calories"
          readOnly
          type="text"
          value={`${calories}`}
        />
      </label>
    </div>
  );
}

export default App;
