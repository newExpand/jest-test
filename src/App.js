import { useState } from "react";
import "./App.css";

function App() {
    const [buttonColor, setButtonColor] = useState("red");
    const [checkedCheckbox, setCheckedCheckbox] = useState(false);
    const newButtonColor = buttonColor === "red" ? "blue" : "red";
    const newButtonText = buttonColor === "red" ? "파란색" : "빨간색";

    return (
        <div>
            <button
                style={{ backgroundColor: buttonColor }}
                onClick={() => setButtonColor(newButtonColor)}
                disabled={checkedCheckbox}
            >
                {newButtonText}으로 변경
            </button>
            <input
                type="checkbox"
                id="disabled-button-checkbox"
                defaultChecked={checkedCheckbox}
                onChange={(e) => setCheckedCheckbox(e.target.checked)}
            />
        </div>
    );
}

export default App;
