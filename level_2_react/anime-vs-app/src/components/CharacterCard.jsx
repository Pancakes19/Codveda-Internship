function CharacterCard({ character }) {
  return (
    <div style={{
      background: "#1e293b",
      padding: "15px",
      borderRadius: "12px",
      textAlign: "center",
      width: "160px",
      boxShadow: "0 4px 15px rgba(0,0,0,0.5)"
    }}>
      <img
        src={character.image}
        alt={character.name}
        style={{
          width: "100%",
          borderRadius: "10px"
        }}
      />
      <h3>{character.name}</h3>
      <p style={{ fontSize: "12px", color: "#94a3b8" }}>
        {character.anime}
      </p>
    </div>
  );
}

export default CharacterCard;