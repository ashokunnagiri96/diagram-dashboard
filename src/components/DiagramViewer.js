import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

function DiagramViewer({ image }) {

  if (!image) {
    return <p style={{padding:"20px"}}>Upload diagram first</p>;
  }

  return (
    <div style={{padding:"20px"}}>

      <TransformWrapper>
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            <div style={{marginBottom:"10px"}}>
              <button onClick={zoomIn}>Zoom In</button>
              <button onClick={zoomOut}>Zoom Out</button>
              <button onClick={resetTransform}>Reset</button>
            </div>

            <TransformComponent>
              <img src={image} alt="diagram" style={{width:"100%"}} />
            </TransformComponent>
          </>
        )}
      </TransformWrapper>

    </div>
  );
}

export default DiagramViewer;