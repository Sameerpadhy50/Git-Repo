import React, { useState, useEffect } from "react";

const LoadingBoy = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) => (prevPosition + 1) % 101);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100px",
        background: "#ccc",
        position: "relative",
        marginTop: "400px",
      }}
    >
      <div
        style={{
          width: "200px",
          height: "200px",
          //   background: '#00f',
          position: "absolute",
          top: "0",
          left: `${position}%`,
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
        }}
      >
        <div>
          <img
            width="100%"
            background="none"
            src="https://media4.giphy.com/media/gHcZlK8a3ZzRBqYDjx/giphy.gif?cid=6c09b95222vgzaxmyf6u6dntuxjyccg85y43o6xfa54grseq&ep=v1_stickers_related&rid=giphy.gif&ct=s"
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingBoy;
