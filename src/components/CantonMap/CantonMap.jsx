import React, { useEffect, useRef } from "react";
import { drawCanvas } from "../../helpers";
import { ResultsTable } from "../ResultsTable/ResultsTable";

export const CantonMap = ({ data }) => {
  const mapRef = useRef(null);
  const context = useRef(null);

  useEffect(() => {
    if (mapRef && mapRef.current) {
      context.current = mapRef.current.getContext("2d");
    }
  }, []);

  useEffect(() => {
    if (context.current) {
      drawCanvas(context.current, data.results);
    }
  }, [data]);

  return (
    <div>
      <canvas height={538} width={840} className="canvas" ref={mapRef}>
        <ResultsTable results={data.results} />
      </canvas>
    </div>
  );
};
