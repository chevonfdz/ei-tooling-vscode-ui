import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { singleton } from "tsyringe";
import { TApiState } from "../../redux-store/.globals/constants";
import { updateApiState } from "../../redux-store/api-state-store/api-state-actions";
import apiStateStore from "../../redux-store/api-state-store/api-state-store";
import { MediatorType } from "../.globals/constants";

@singleton()
export default class ApiStateService {

    private apiState: TApiState = {};
    private apiState$: BehaviorSubject<TApiState>;
    
    constructor() {
        this.apiState$ = new BehaviorSubject(apiStateStore.getState());
        
        this.apiState$.subscribe(
            (newApiState: TApiState) => {
                console.log(newApiState);
                this.apiState = newApiState;
                apiStateStore.dispatch(updateApiState(this.apiState));
            }
        );
    }
    
    public getApiState(): TApiState {
        return this.apiState;
    }

    public setApiState(val: String) {
        this.apiState$.next(val);
    }

    public testService(): void {
        alert ("Hello DI!");
    }

    public addOrReplaceMediator(mediatorType: MediatorType): void {
        switch(mediatorType) {
            case MediatorType.DROP_MEDIATOR:
                this.apiState$.next(this.getStateWithNewMediator("drop", this.apiState));
                break;
            case MediatorType.CALL_MEDIATOR:
                this.apiState$.next(this.getStateWithNewMediator("call", this.apiState));
                break;
            case MediatorType.LOG_MEDIATOR:
                this.apiState$.next(this.getStateWithNewMediator("log", this.apiState));
                break;
        }
    }

    private getStateWithNewMediator(mediatorName: string, apiState: TApiState): TApiState {
        var nextApiState = {...apiState};
        nextApiState.api.resource.inSequence = {[mediatorName]: ""};
        return nextApiState;
    }
}