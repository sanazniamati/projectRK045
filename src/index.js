import React from "react";
import ReactDOM from "react-dom/client";
import { Stage, Layer, Rect } from "react-konva";

const App = () => {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Rect width={100} height={100} fill={"green"} />
        <Rect
          x={200}
          y={50}
          width={100}
          height={100}
          fill={"red"}
          preventDefault={false}
        />
      </Layer>
    </Stage>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
