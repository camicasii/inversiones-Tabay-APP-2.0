import React from "react";

export default function TCHead({ query }) {
  return (
    <thead>
      <tr>
        {Object.keys(query).map(key => (
          <th scope="col">{key}</th>
        ))}
      </tr>
    </thead>
  );
}
