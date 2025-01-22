import "../css/card.css";

function Card({ children }) {
  return (
    <div className="card">
      <div className="inside-card">{children}</div>
    </div>
  );
}

export default Card;
