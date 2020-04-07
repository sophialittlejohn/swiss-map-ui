import React, { useEffect, useState } from "react";
import "./App.css";
import { ResultsTable } from "../ResultsTable/ResultsTable";
import { CantonMap } from "../CantonMap/CantonMap";

const sampleDataUrl =
  "https://gist.githubusercontent.com/epfl-exts-react/63181e2beb4f813d9988734e93026b0c/raw/e9c7ef1cea83434f867b69fe8cc73ccdc02ff667/swiss-vote-results-sample.json";

function App() {
  const [data, setData] = useState(null);
  const [tableData, setTableData] = useState(null);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(sampleDataUrl);
        const apiData = await response.json();
        setData(apiData);
        setTableData(apiData[0]);
      } catch (error) {
        console.error("Caught an error:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const newTableData =
      data && data.find(el => el.description.en === selected);
    newTableData && setTableData(newTableData);
  }, [selected, data]);

  return (
    <main>
      <h2>SWISS VOTE</h2>
      {data && tableData && (
        <figure>
          <CantonMap results={tableData.results} />
          <ResultsTable
            options={
              data.length > 0 && data.map(option => option.description.en)
            }
            selected={selected}
            setSelected={setSelected}
            results={tableData.results}
          />
        </figure>
      )}
    </main>
  );
}

export default App;
