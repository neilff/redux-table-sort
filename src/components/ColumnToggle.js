import React from 'react';

// Shows a list of columns available on the object
// clicking one will show / hide that column
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
    <ul>{columnList}</ul>
  );
};

export default ColumnToggle;