import React, { Component } from 'react'
import DiagramBoard from './components/shell/shell-components/diagram-board/diagram-board';

type Props = {}

type State = {
  apiState: any;
}

export default class App extends Component<Props, State> {
  state: State = {
    apiState: {
      api: {
        resource: {
          inSequence: {},
          outSequence: "",
          faultSequence: "",
        },
      },
    },
  }

  render() {
    return (
      <div className="contentArea">
        <DiagramBoard />
      </div>
    )
  }
}
