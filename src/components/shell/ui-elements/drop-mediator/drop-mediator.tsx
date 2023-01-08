import { Component } from 'react'
import { container } from 'tsyringe';
import ApiStateService from '../../../../services/api-state-service/api-state-service';

type Props = {}

class DropMediator extends Component<Props> {

  private apiStateService: ApiStateService;

  constructor(props: Props) {
    super(props);
    this.apiStateService = container.resolve(ApiStateService);
  }

  render() {
    return (
      <div>
        <span>-------- DropMediator --------</span><br />
        <button onClick={() => {
          this.apiStateService.testService();
        }}>Test Api Service!</button>
      </div>
      
    )
  }
}

export default DropMediator;