import React, { useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import "./App.css";
import imagePause from "./image/play.png";

function App() {
  const { speak } = useSpeechSynthesis();
  const [value, setValue] = useState("");

  return (
    <div className="hero">
      <h1>
        Text to speech and speech to text <span>Converter</span>
      </h1>
      <textarea
        placeholder="Write anything here..."
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      ></textarea>
      <div className="row">
        <button
          onClick={() => {
            speak({ text: value });
          }}
        >
          <img src={imagePause} />
          Listen
        </button>
      </div>
    </div>
  );
}

export default App;
