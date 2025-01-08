import React from "react";

const Loader = () => {
  return (
    <div style={loaderStyle}>
      <div style={spinnerStyle}></div>
    </div>
  );
};

const loaderStyle = {
  display: "flex",
  justifyContent: "center",
  height: "100vh",
};

const spinnerStyle = {
  border: "5px solid #f3f3f3",
  borderTop: "5px solid blue",
  borderRadius: "50%",
  width: "50px",
  height: "50px",
  animation: "spin 1s linear infinite",
};

const keyframes = `
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

document.styleSheets[0].insertRule(keyframes, 0);

export default Loader;
