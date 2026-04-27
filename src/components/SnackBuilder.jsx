import {useState} from "react";

export default function SnackBuilder() {
    const [calories, setCalories] = useState('150');
    const [hunger, setHunger] = useState('medium'); // use hunger-satiety scale

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
        </div>


    )
}