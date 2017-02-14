import React from 'react';
import _ from 'lodash';

const Table = (props) => {
  const { data } = props;

  // the first element will contain (hopefully) all the headers
  const firstElem = _.head(data) || {};
  const dataKeys = Object.keys(firstElem);

  const headers = dataKeys.map((i, idx) => {
    const arrow = i !== props.sortKey ? null : (
      <span>{ props.sortDirection === 'asc' ? '▲' : '▼' }</span>
    );

    return (
      <th key={idx}>
        <a
          href
          onClick={(e) => {
            e.preventDefault();

            // If the next sort key is different, use 'asc', if it is the same as
            // last time, then use the invert of what it previously was
            const invertDirection = props.sortDirection === 'asc' ? 'desc' : 'asc';
            const nextDirection = i === props.sortKey ? invertDirection : 'asc';

            props.sortBy(i, nextDirection);
          }}>
          { i } { arrow }
        </a>
      </th>
    );
  });

  const content = data.map((item, idx) => {
    const rowContent = dataKeys.map((key, index) => (
      <td key={index}>{ item[key] }</td>
    ));

    return (
      <tr key={idx}>
        { rowContent }
      </tr>
    );
  });

  return (
    <div>
      <h2>Table Data</h2>
      <table>
        <thead>
          <tr>
            { headers }
          </tr>
        </thead>
        <tbody>
          { content }
        </tbody>
      </table>
    </div>
  );
}

export default Table;