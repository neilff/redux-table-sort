import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import * as columnActions from '../actions/column';

import LoadingOrComponent from '../components/LoadingOrComponent';
import ColumnToggle from '../components/ColumnToggle';
import LoadingDialog from '../components/LoadingDialog';

const ColumnToggleContainer = (props) => (
  <div>
    <h2>Column Toggle</h2>
    <ColumnToggle {...props} />
  </div>
);

const mapStateToProps = (state) => ({
  availableColumns: Object.keys((_.head(state.data.dataset) || {})),
  omittedColumns: state.column.omit,
  isLoading: state.data.loading,
});

const mapDispatchToProps = (dispatch) => ({
  toggleColumn: (key) => dispatch(columnActions.toggleColumn(key)),
});

export default _.flowRight(
  connect(mapStateToProps, mapDispatchToProps),
  LoadingOrComponent,
)((ColumnToggleContainer));