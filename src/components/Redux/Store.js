
import { createStore } from "redux";
import todoReducer from "./todoReducer";

const myStore = createStore(todoReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default myStore;
