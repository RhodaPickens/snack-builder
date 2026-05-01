export default function SnackForm({calories, setCalories, hunger, setHunger}) {

    return (
        <div>
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
    );
}

