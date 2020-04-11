import React, { useEffect, useRef } from "react";
import "./CantonMap.css";
import { drawCanvas } from "../../helpers";

export const CantonMap = ({ results, description, children }) => {
  const mapRef = useRef(null);
  const context = useRef(null);

  useEffect(() => {
    if (mapRef && mapRef.current) {
      context.current = mapRef.current.getContext("2d");
    }
  }, []);

  useEffect(() => {
    if (context.current) {
      drawCanvas(context.current, results);
    }
  }, [results]);

  return (
    <div className="map">
      {/* <h2 className="map-title">{description.en}</h2> */}
      <canvas height={538} width={840} className="canvas" ref={mapRef}>
        {React.cloneElement(children, {
          description,
          results,
        })}
      </canvas>
    </div>
  );
};
