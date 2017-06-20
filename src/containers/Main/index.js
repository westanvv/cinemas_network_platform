import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as appActions from '../../actions/app'

class Main extends React.Component {

  render() {

    return (
      <div id="main-layout">
        test
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    appReducer: state.appReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    appActions: bindActionCreators(appActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
