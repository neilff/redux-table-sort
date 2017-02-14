import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import TableContainer from './TableContainer';
import ColumnToggleContainer from './ColumnToggleContainer';
import AppState from '../components/AppState';

class App extends PureComponent {
  render() {
    const { props } = this;

    return (
      <div className="app">
        <div className="app-main">
          <ColumnToggleContainer />
          <TableContainer />
        </div>

        <div className="app-secondary">
          <AppState state={ props.state } />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state,
  };
};

const mapDispatchToProps = (dispatch, props) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
