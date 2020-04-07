import React, { useEffect, useState } from "react";
import "./App.css";
import { CantonMap } from "../CantonMap/CantonMap";
import { Select } from "../Select/Select";
import { ResultsTable } from "../ResultsTable/ResultsTable";

function App() {
  const [data, setData] = useState(null);
  const [selectedData, setSelectedData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./swiss-vote-results-sample.json");
        const apiData = await response.json();
        setData(apiData);
        setSelectedData(apiData[0]);
      } catch (error) {
        console.error("Caught an error:", error);
      }
    };
    fetchData();
  }, []);

  const handleSelect = (selecion) => {
    const newData =
      data && data.find((option) => option.description.en === selecion);
    setSelectedData(newData);
  };

  useEffect(() => {
    if (data && selectedData) {
      const newTableData = data.find(
        ({ description: { en } }) => en === selectedData.description.en
      );
      newTableData && setSelectedData(newTableData);
    }
  }, [selectedData, data]);

  if (data && selectedData) {
    return (
      <main>
        <h2>SWISS VOTE</h2>
        <Select
          options={data && data.map((option) => option.description.en)}
          selected={selectedData.description.en}
          setSelected={handleSelect}
        />
        {selectedData && (
          <figure>
            <CantonMap {...selectedData}>
              <ResultsTable />
            </CantonMap>
          </figure>
        )}
      </main>
    );
  } else {
    return <h1>Loading...</h1>;
  }
}

export default App;
