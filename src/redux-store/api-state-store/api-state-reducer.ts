import { ApiStoreActionType, TApiState } from "../.globals/constants"
import { AnyAction } from "redux";

const initialState: TApiState = {
    api: {
        resource: {
          inSequence: {},
          outSequence: "",
          faultSequence: "",
        },
      },
}

export default function apiStateReducer(apiState: TApiState = initialState, action: AnyAction): TApiState {
    switch(action.type) {
        case ApiStoreActionType.UPDATE_API_STATE:
            return action.newApiState;
        default: return apiState;
    }
}

// export default function mediatorReducer(apiState: TApiState = initialState, action: AnyAction): TApiState {
//     switch(action.type) {
//         case ApiStoreActionType.ADD_MEDIATOR: 
//             switch(action.mediatorType) {
//                 case MediatorType.DROP_MEDIATOR:
//                     return getStateWithNewMediator("drop", apiState);
//                 case MediatorType.CALL_MEDIATOR:
//                     return getStateWithNewMediator("call", apiState);
//                 case MediatorType.LOG_MEDIATOR:
//                     return getStateWithNewMediator("log", apiState);
//                 default: return apiState
//             }
//         default: return apiState;
//     }
// }