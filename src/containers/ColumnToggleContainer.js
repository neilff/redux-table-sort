import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import * as columnActions from '../actions/column';

import ColumnToggle from '../components/ColumnToggle';

const ColumnToggleContainer = (props) => (<ColumnToggle {...props} />);

const mapStateToProps = (state) => ({
  availableColumns: Object.keys((_.head(state.data) || {})),
  omittedColumns: state.column.omit,
});

const mapDispatchToProps = (dispatch) => ({
  toggleColumn: (key) => dispatch(columnActions.toggleColumn(key)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ColumnToggleContainer);