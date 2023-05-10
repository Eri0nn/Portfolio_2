import React, { useRef } from "react";
import "./BlobEffect.css";

function Blob() {
  const blobRef = useRef(null);

  function handlePointerMove(event) {
    const { clientX, clientY } = event;
    blobRef.current.animate(
      {
        left: `${clientX}px`,
        top: `${clientY}px`,
      },
      { duration: 2000, fill: "forwards" }
    );
  }

  return (
    <>
      <div id="blob" ref={blobRef} onPointerMove={handlePointerMove}></div>
      <div id="blur"></div>
    </>
  );
}

export default Blob;
