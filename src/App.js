import { useState } from "react";
import "./App.css";

export function replaceCamelWithSpaces(colorName) {
    return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
    const [buttonColor, setButtonColor] = useState("red");
    const [checkedCheckbox, setCheckedCheckbox] = useState(false);
    const newButtonColor = buttonColor === "red" ? "blue" : "red";
    const newButtonText = buttonColor === "red" ? "파란색" : "빨간색";

    return (
        <div>
            <button
                style={{ backgroundColor: checkedCheckbox ? "gray" : buttonColor }}
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
            <label htmlFor="disabled-button-checkbox">버튼 비활성화</label>
        </div>
    );
}

export default App;
