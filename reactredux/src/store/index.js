import { createStore } from "redux";
import rootReducer from "./reducers";
// createStore: cria o estado global

const store = createStore(rootReducer);

export default store;
