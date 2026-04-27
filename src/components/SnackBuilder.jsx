import {useState} from "react";

export default function SnackBuilder() {
    const [calories, setCalories] = useState('150');
    const [hunger, setHunger] = useState('medium'); // use hunger-satiety scale
    const [results, setResults] = useState([]);
    const snacks = [
        {name: "Greek yogurt + berries", calories: 150, filling: "high"},
        {name: "Apple + peanut butter", calories: 200, filling: "medium"},
        {name: "Popcorn", calories: 100, filling: "low"},
        {name: "Protein shake", calories: 160, filling: "high"},
        {name: "1oz pretzels + 2tbsp hummus", calories: 150, filling: "medium"},
        {name: "Mozzarella stick + 5 whole-grain crackers", calories: 140, filling: "medium"},
        {name: "20 almonds", calories: 130, filling: "high"},
        {name: "Banana", calories: 120, filling: "low"},
        {name: "Hard-boiled egg", calories: 80, filling: "medium"},
        {name: "Hard-boiled egg + 5 whole-grain crackers", calories: 150, filling: "high"},
        {name: "Breakstone cottage cheese", calories: 130, filling: "high"},
        {name: "1/4 cup trail mix", calories: 140, filling: "medium"},
        {name: "1/4 cucumber + 2tbsp hummus + 1tsp olive oil drizzle", calories: 130, filling: "medium"},
        {name: "1/2 toast + 1tbsp peanut butter", calories: 150, filling: "high"},
        {name: "1/2 bell pepper + slice cheese", calories: 120, filling: "high"},
        {name: "1 sliced tomato + mozzarella stick + 1tsp balsamic glaze", calories: 130, filling: "medium"},
    ];

    function generateSnacks() {
        // keeps only snacks that are less than or equal to input calorie limit
        const filtered = snacks.filter((snack) => snack.calories <= calories);

        // keeps only snacks that match input hunger level
        const matched = filtered.filter((snack) => snack.filling === hunger);

        // take the top 3 results and save to state
        setResults(matched.slice(0, 3)); // what happens if less than three??? Or none?
    }

    return (
        <div>
            <h1>Snack Builder</h1>
            <input
                type="number"
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
            />
            <select value={hunger} onChange={(e) => setHunger(e.target.value)}>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">Very Hungry</option>
            </select>
            <button onClick={generateSnacks}>Suggest Snacks</button>
            <ul>
                {results.map((snack, index) => (
                    <li key={index}>
                        {snack.name} ({snack.calories} cal)
                    </li>
                ))}
            </ul>
        </div>


    )
}