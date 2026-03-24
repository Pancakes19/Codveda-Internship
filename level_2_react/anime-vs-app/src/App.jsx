import { useState } from "react";
import { characters } from "./data/characters";
import CharacterCard from "./components/CharacterCard";

function App() {
  const [left, setLeft] = useState(null);
  const [right, setRight] = useState(null);

  const spin = () => {
    const random1 = characters[Math.floor(Math.random() * characters.length)];
    const random2 = characters[Math.floor(Math.random() * characters.length)];

    setLeft(random1);
    setRight(random2);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🔥 Anime VS 🔥</h1>

      <div style={{ display: "flex", justifyContent: "center", gap: "40px", alignItems: "center" }}>
        {left && <CharacterCard character={left} />}

        <h2>VS</h2>

        {right && <CharacterCard character={right} />}
      </div>

      <button
        onClick={spin}
        style={{ marginTop: "30px", padding: "10px 20px", fontSize: "16px" }}
      >
        SPIN 🎰
      </button>
    </div>
  );
}

export default App;
