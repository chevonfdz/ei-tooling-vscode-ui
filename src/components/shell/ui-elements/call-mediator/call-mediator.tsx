import { Component } from 'react'
import { connect } from 'react-redux'
import { TApiState } from '../../../../redux-store/.globals/constants'

type Props = {
  apiState: TApiState 
}

class CallMediator extends Component<Props> {

  render() {
    return (
      <div>
        <span>-------- CallMediator --------</span><br /><br />
        {JSON.stringify(this.props.apiState)}
        <br /><br />
      </div>
    )
  }
}

const mapStateToProps = (state: TApiState) => {
  return {
    apiState: state
  }
}

export default connect(mapStateToProps)(CallMediator);