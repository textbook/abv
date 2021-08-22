import { useEffect, useState } from "react";

const FACTOR = 2.5 / 29.57;

function App() {
  const [abv, setAbv] = useState(0);
  const [volume, setVolume] = useState(0);
  const [calories, setCalories] = useState(0);

  useEffect(() => {
    setCalories(Math.round(abv * volume * FACTOR));
  }, [abv, volume]);

  return (
    <div>
      <label>
        ABV (%)
        <input
          onChange={({ target: { value } }) => setAbv(parseFloat(value))}
          type="number"
          value={abv}
        />
      </label>

      <label>
        Volume (ml)
        <input
          onChange={({ target: { value } }) => setVolume(parseFloat(value))}
          type="number"
          value={volume}
        />
      </label>

      <label>
        Calories
        <input readOnly name="calories" type="text" value={`${calories}`} />
      </label>
    </div>
  );
}

export default App;
