import React, { memo } from "react";

const renderRow = (data = null, index = 1) => {
  return (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{data.name}</td>
      <td>
        <img alt={data.name + " Flag"} src={data.flag} width={50} height={30} />
      </td>
      <td>{data.alpha2Code}</td>
      <td>{data.capital}</td>
      <td>{data.region}</td>
      <td>{data.subregion}</td>
      <td>{data.population}</td>
      <td>{data.languages[0].name}</td>
      <td>{data.currencies[0].name}</td>
      <td>{data.currencies[0].symbol}</td>
    </tr>
  );
};

const CountriesTable = ({ data = [] } = {}) => {
  if (data.length === 0) {
    return null;
  }

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">S.No</th>
          <th scope="col">Name</th>
          <th scope="col">Flag</th>
          <th scope="col">Code</th>
          <th scope="col">Capital</th>
          <th scope="col">Region</th>
          <th scope="col">Sub-Region</th>
          <th scope="col">Population</th>
          <th scope="col">Language</th>
          <th scope="col">Currency Name</th>
          <th scope="col">Currency Symbol</th>
        </tr>
      </thead>
      <tbody>{data.map(renderRow)}</tbody>
    </table>
  );
};

export default memo(CountriesTable);
