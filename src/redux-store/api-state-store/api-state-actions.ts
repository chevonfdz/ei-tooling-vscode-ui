import { ApiStoreActionType, TApiState } from "../.globals/constants";

export function updateApiState(newApiState: TApiState) {
    return {
        type: ApiStoreActionType.UPDATE_API_STATE, 
        newApiState: newApiState
    }
}