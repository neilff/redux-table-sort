import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import LoadingOrComponent from '../components/LoadingOrComponent';
import Table from '../components/Table';

import * as sortActions from '../actions/sort';

const TableContainer = (props) => (
  <div>
    <h2>Table Data</h2>
    <Table { ...props } />
  </div>
);

// Should use Reselect here to simplify this -- this is where the magic happens
// we will calculate a derived state of the raw store state. we do this by taking
// the original data, the sorted state, and the visible columns to calculate a
// derived version of the dataset
const mapStateToProps = (state) => {
  const { data, sort, column } = state;

  const sortKey = sort.key;
  const sortDirection = sort.direction;
  const omittedKeys = column.omit;

  const sortedData = data.dataset
    .map((row) => _.omit(row, omittedKeys)) // clean any columns that should be hidden
    .sort((a, b) => {
      const sortA = a[sortKey];
      const sortB = b[sortKey];

      // sort numbers, otherwise strings
      if (_.isNumber(sortA) || _.isNumber(sortB)) {
        return sortDirection === 'asc' ? sortA - sortB : sortB - sortA;
      }

      const compareA = (sortA || '').toUpperCase(); // ignore upper and lowercase
      const compareB = (sortB || '').toUpperCase(); // ignore upper and lowercase

      if (compareA < compareB) {
        return sortDirection === 'asc' ? -1 : 1;
      }
      if (compareA > compareB) {
        return sortDirection === 'asc' ? 1 : -1;
      }

      return 0;
    });

  return {
    state,
    data: sortedData,
    sortKey,
    sortDirection,
    isLoading: data.loading,
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  sortBy: (key, direction) => dispatch(sortActions.sortBy(key, direction)),
});

export default _.flowRight(
  connect(mapStateToProps, mapDispatchToProps),
  LoadingOrComponent,
)(TableContainer);
