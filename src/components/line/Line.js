import "./Line.css";

import { useState } from "react";

const Line = (props) => {
  const { symbol, title } = props;
  const [hoverLine, setHoverLine] = useState(false);

  return (
    <div
      onMouseEnter={() => setHoverLine(true)}
      onMouseLeave={() => setHoverLine(false)}
      onClick={() => {
        navigator.clipboard.writeText(symbol);
      }}
    >
      <div className="line-container">
        <p>
          <span>{symbol}</span>
          <span>{title}</span>
        </p>

        {hoverLine && <div className="copy-span">Click to copy !</div>}
      </div>
    </div>
  );
};

export default Line;
