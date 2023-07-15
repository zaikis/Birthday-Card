import React, { useState, useRef, useEffect } from "react";

function Confetti() {
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const confetiRef = useRef(null);

  useEffect(() => {
    setHeight(confetiRef.current.clientHeight);
    setWidth(confetiRef.current.clientWidth);
  }, []);

  return (
    <div className="App">
      <div className="confettie-wrap" ref={confetiRef}>
        <h3>Confettie Effect </h3>
        <Confetti numberOfPieces={150} width={width} height={height} />
      </div>
    </div>
  );
}

export default Confetti;
