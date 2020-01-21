import React from "react";

export default function TCBody({ data }) {
  return (
    <tbody>
      {data.map(value => (
        <tr>
          {Object.keys(value).map((key, i) => {
            if (i == 0) return <th scope="row">{value[key]}</th>;
            return <td>{value[key]}</td>;
          })}
        </tr>
      ))}
    </tbody>
  );
}
