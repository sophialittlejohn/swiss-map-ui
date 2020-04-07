import React, { useEffect, useState } from "react";
import "./App.css";
import { CantonMap } from "../CantonMap/CantonMap";
import { Select } from "../Select/Select";

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
      data && data.find((el) => el.description.en === selected);
    newTableData && setTableData(newTableData);
  }, [selected, data]);

  if (data && tableData) {
    return (
      <main>
        <h2>SWISS VOTE</h2>
        <Select
          options={data && data.map((option) => option.description.en)}
          selected={selected}
          setSelected={setSelected}
        />
        {tableData && (
          <figure>
            <CantonMap data={tableData} />
          </figure>
        )}
      </main>
    );
  } else {
    return <h1>Loading...</h1>;
  }
}

export default App;
