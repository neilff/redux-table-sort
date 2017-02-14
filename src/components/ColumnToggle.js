import React from 'react';

const ColumnToggle = (props) => {
  const columnList = props.availableColumns.map((i, idx) => (
    <li key={ idx }>
      <label>
        <input
          type="checkbox"
          checked={!props.omittedColumns.includes(i)}
          onClick={ () => props.toggleColumn(i) } />
        {i}
      </label>
    </li>
  ))

  return (
    <div>
      <h2>Column Toggle</h2>
      <ul>{columnList}</ul>
    </div>
  );
};

export default ColumnToggle;