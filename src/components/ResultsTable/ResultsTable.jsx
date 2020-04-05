import React from "react";
import { Select } from "../Select/Select";

export const ResultsTable = ({ results, selected, setSelected, options }) => {
  return (
    <table className="result-table">
      <Select options={options} selected={selected} setSelected={setSelected} />
      <thead>
        <tr>
          <th>Canton</th>
          <th>Yes</th>
          <th>No</th>
        </tr>
      </thead>
      <tbody>
        {results.map(({ canton, yes, no }) => (
          <tr key={canton}>
            <td>{canton}</td>
            <td>{yes}</td>
            <td>{no}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
