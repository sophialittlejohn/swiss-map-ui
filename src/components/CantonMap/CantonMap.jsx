import React, { useEffect, useRef } from "react";
import { drawCanvas } from "../../helpers";

export const CantonMap = ({ results }) => {
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
    <div>
      <canvas height={538} width={840} className="canvas" ref={mapRef} />
    </div>
  );
};
