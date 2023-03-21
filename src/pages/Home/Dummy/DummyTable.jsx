import React from "react";

const DummyTable = ({ data, columns }) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((col, index) => (
            <th key={index}>{col.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {columns.map((col, index) => (
              //   <td key={index}>
              //     {col.key.includes(".")
              //       ? col.key.split(".").reduce((obj, key) => obj[key], row)
              //       : row[col.key]}
              //   </td>
            //   <td key={index}>
            //     {col.key.includes(".")
            //       ? col.key.split(".").reduce((obj, key) => obj[key], row)
            //       : Array.isArray(row[col.key])
            //       ? row[col.key].join(", ")
            //       : row[col.key]}
            //   </td>
              <td key={index}>
              {col.key.includes('.')
                ? col.key.split('.').reduce((obj, key) => obj[key], row)
                : Array.isArray(row[col.key])
                ? row[col.key].map((el) => el.value).join(', ')
                : row[col.key]}
            </td>
            
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DummyTable;
