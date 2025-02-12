import React from "react";

function VennDiagram() {
  return (
    <>
      <svg height="300" width="300" xmlns="http://www.w3.org/2000/svg">
        <circle r="100" cx="100" cy="100" fill="red" fillOpacity="0.35" />
        <circle r="100" cx="200" cy="100" fill="blue" fillOpacity="0.35" />
      </svg>
    </>
  );
}

export default VennDiagram;
