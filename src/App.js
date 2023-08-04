import { useState } from "react";
import "./App.css";

export function replaceCamelWithSpaces(colorName) {
    return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
    const [buttonColor, setButtonColor] = useState("MediumVioletRed");
    const [checkedCheckbox, setCheckedCheckbox] = useState(false);
    const newButtonColor =
        buttonColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";

    return (
        <div>
            <button
                style={{ backgroundColor: checkedCheckbox ? "gray" : buttonColor }}
                onClick={() => setButtonColor(newButtonColor)}
                disabled={checkedCheckbox}
            >
                {replaceCamelWithSpaces(newButtonColor)}로 변경
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
