import React, { Component } from 'react'
import { container } from 'tsyringe'
import { MediatorType } from '../../../../services/.globals/constants'
import ApiStateService from '../../../../services/api-state-service/api-state-service'
import CallMediator from '../../ui-elements/call-mediator/call-mediator'
import DropMediator from '../../ui-elements/drop-mediator/drop-mediator'

type Props = {}

class DiagramBoard extends Component<Props> {

  private apiStateService: ApiStateService;

  constructor(props: Props) {
    super(props);
    this.apiStateService = container.resolve(ApiStateService);
  }

  render(): React.ReactNode {
    return (
      <div>
        <span>-------- DiagramBoard --------</span> 
        <CallMediator />
        <DropMediator />

        <button onClick={() => {
          this.apiStateService.addOrReplaceMediator(MediatorType.DROP_MEDIATOR);
        }}>Drop Mediator</button>
        <button onClick={() => {
          this.apiStateService.addOrReplaceMediator(MediatorType.CALL_MEDIATOR);
        }}>Call Mediator</button>
        <button onClick={() => {
          this.apiStateService.addOrReplaceMediator(MediatorType.LOG_MEDIATOR);
        }}>Log Mediator</button>
      </div>
      
    )
  }
}

export default DiagramBoard;