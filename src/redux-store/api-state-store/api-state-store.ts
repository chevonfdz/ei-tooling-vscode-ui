import { createStore } from "redux";
import apiStateReducer from "./api-state-reducer";

const apiStateStore = createStore(apiStateReducer)

export default apiStateStore;