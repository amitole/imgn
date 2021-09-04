import React, { useState, useEffect } from "react";
import { getData } from "./http/Get";
import Table from "./components/Table";
import Pagination from "./components/Pagination";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowPerPage, setrowPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await getData();
      setData(result.data.children);
      setLoading(false);
    };
    fetchData();
  }, []);

  const indexOfLastRow = currentPage * rowPerPage;
  const indexOfFirstRow = indexOfLastRow - rowPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <Table data={currentRows} loading={loading} />
      <Pagination
        rowPerPage={rowPerPage}
        totalRows={data.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
