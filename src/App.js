import "./styles.css";
import { useState } from "react";
import Rate from "./Rate";

export default function App() {
  const [rating, setRating] = useState(0);
  const [rating2, setRating2] = useState(0);
  const [rating3, setRating3] = useState(0);

  return (
    <div className="App">
      <Rate rating={rating} onRating={(rate) => setRating(rate)} />
      <p style={{ margin: "0", marginBottom: "1rem" }}>Rating - {rating} </p>
      <Rate rating={rating2} onRating={(rate) => setRating2(rate)} />
      <p style={{ margin: "0", marginBottom: "1rem" }}>Rating - {rating2} </p>
      <Rate rating={rating3} onRating={(rate) => setRating3(rate)} />
      <p style={{ margin: "0", marginBottom: "1rem" }}>Rating - {rating3} </p>
    </div>
  );
}
