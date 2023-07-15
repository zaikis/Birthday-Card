import Card from "./Card";
import Balloons from "./Balloons";
import "./styles.css";
import Confetti from "react-confetti";

export default function App() {
  return (
    <div>
      <Balloons />
      <Confetti />
      <Card />
    </div>
  );
}

