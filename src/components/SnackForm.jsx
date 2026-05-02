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
                <label>Where are you on the hunger scale right now?</label>
                <select className="snack-input" value={hunger} onChange={(e) => setHunger(e.target.value)}>
                    <option value="1">1 - Starving</option>
                    <option value="2">2 - Very Hungry</option>
                    <option value="3">3 - Hungry</option>
                    <option value="4">4 - Slightly Hungry</option>
                    <option value="5">5 - Neutral</option>
                    <option value="6">6 - Slightly Full</option>
                    <option value="7">7 - Comfortably Full</option>
                    <option value="8">8 - Too Full</option>
                    <option value="9">9 - Very Full</option>
                    <option value="10">10 - Painfully Full</option>
                </select>
            </div>
        </div>
    );
}

