import { useState } from "react";
import "./App.css";

function App() {
    const [buttonColor, setButtonColor] = useState("red");
    const newButtonColor = buttonColor === "red" ? "blue" : "red";
    const newButtonText = buttonColor === "red" ? "파란색" : "빨간색";

    return (
        <div>
            <button
                style={{ backgroundColor: buttonColor }}
                onClick={() => setButtonColor(newButtonColor)}
            >
                {newButtonText}으로 변경
            </button>
        </div>
    );
}

export default App;
