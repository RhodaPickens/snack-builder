export default function SnackForm({calories, setCalories, hunger, setHunger}) {

    return (
        <div className="snack-form">
            <div className="form-group">
                <label>Enter calories available:</label>
                <input
                    className="snack-input"
                    type="number"
                    value={calories}
                    onChange={(e) => setCalories(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>How hungry are you?</label>
                <select className="snack-input" value={hunger} onChange={(e) => setHunger(e.target.value)}>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">Very Hungry</option>
                </select>
            </div>
        </div>
    );
}

