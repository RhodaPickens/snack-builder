import SnackForm from "./SnackForm";
import {useState} from "react";
import {snacks} from "../data/snacks.js";

export default function SnackBuilder() {
    const [results, setResults] = useState([]);
    const [hasSearched, setHasSearched] = useState(false);
    const [calories, setCalories] = useState('150');
    const [hunger, setHunger] = useState('medium'); // use hunger-satiety scale

    function generateSnacks() {
        setHasSearched(true);
        // keeps only snacks that are less than or equal to input calorie limit
        const filtered = snacks.filter((snack) => snack.calories <= calories);

        // keeps only snacks that match input hunger level
        const matched = filtered.filter((snack) => snack.filling === hunger);

        // take the top 3 results and save to state
        setResults(matched.slice(0, 3));
    }

    return (
        <div className="container">
            <div className="card">
                <h1>Snack Builder</h1>
                <SnackForm
                    calories={calories}
                    setCalories={setCalories}
                    hunger={hunger}
                    setHunger={setHunger}
                />
                <button onClick={generateSnacks}>Suggest Snacks</button>
                {hasSearched && results.length === 0 ? <p>"No snacks found 🙁"</p> : null}
                <ul>
                    {results.map((snack, index) => (
                        <li key={index}>
                            {snack.name} ({snack.calories} cal)
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}