import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import TableContainer from './TableContainer';
import ColumnToggleContainer from './ColumnToggleContainer';
import AppState from '../components/AppState';

import * as dataActions from '../actions/data';

class App extends PureComponent {
  componentDidMount() {
    this.props.onLoad();
  }

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

const mapDispatchToProps = (dispatch, props) => ({
  onLoad: () => dispatch(dataActions.requestData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
