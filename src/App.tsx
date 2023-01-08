import React, { Component } from 'react'
import { Provider } from 'react-redux';
import DiagramBoard from './components/shell/shell-components/diagram-board/diagram-board';
import apiStateStore from './redux-store/api-state-store/api-state-store';

export default class App extends Component {

  render() {
    return (
      <Provider store={apiStateStore}>
        <div className="contentArea">
          <DiagramBoard />
        </div>
      </Provider>
    )
  }

}
