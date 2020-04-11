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
        setSelectedData(apiData[7]);
      } catch (error) {
        console.error("Caught an error:", error);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (value) => {
    const newData =
      data && data.find((option) => option.description.en === value);
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
      <div>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&family=Roboto+Slab:wght@400;600&display=swap');
        </style>
        <main className="main">
          <h1 className="title">Swiss Vote</h1>
          <Select handleSearch={handleSearch} data={data} />

          <figure>
            <CantonMap {...selectedData}>
              <ResultsTable />
            </CantonMap>
          </figure>
        </main>
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
}

export default App;
