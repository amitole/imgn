import React from "react";
import "./Table.css";

const Table = ({ data, loading }) => {
  if (loading) {
    return <h1>Loading...</h1>;
  }

  let rows = data.map((row) => (
    <tr key={row.data.created}>
      <td>{row.data.url}</td>
      <td>{row.data.title}</td>
      <td>{row.data.author}</td>
      <td>{row.data.ups}</td>
      <td>{new Date(row.data.created * 1000).toLocaleString()}</td>
      <td>{row.data.thumbnail}</td>
    </tr>
  ));

  return (
    <div className="container">
      <table id="students">
        <tbody>
          <tr>
            <th>URL</th>
            <th>Title</th>
            <th>User</th>
            <th>Votes (ups)</th>
            <th>Time</th>
            <th>Thumbnail</th>
          </tr>
          {rows}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
