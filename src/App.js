import Card from "./Card";
import "./styles.css";
import Confetti from "react-confetti";

export default function App() {
  return (
    <div>
      <Confetti
        size={8}
        shape="circle"
        colors={["#f44336", "#9c27b0", "#3f51b5"]}
        wind={0}
        gravity={0.2}
      />
      <Card />
    </div>
  );
}
