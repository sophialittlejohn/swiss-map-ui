import React from "react";

export const ResultsTable = ({ results }) => {
  return (
    <table className="result-table">
      <caption></caption>
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
