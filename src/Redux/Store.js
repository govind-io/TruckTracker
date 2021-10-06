import createSagaMiddleware from "redux-saga";
import RootReducer from "./RootReducer";
import RootSaga from "./RootSaga";
/*import logger from "redux-logger"; for development purpose*/
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";


const Sagamiddleware=createSagaMiddleware();

const middlewares = [Sagamiddleware];

function saveToLocalStorage(state) {
    try {
      const serialisedState = JSON.stringify(state);
      localStorage.setItem("persistantState", serialisedState);
    } catch (e) {
      console.warn(e);
    }
  }

  function loadFromLocalStorage() {
    try {
      const serialisedState = localStorage.getItem("persistantState");
      if (serialisedState === null) return undefined;
      return JSON.parse(serialisedState);
    } catch (e) {
      console.warn(e);
      return undefined;
    }
  }

  const store = createStore(
    RootReducer,
    loadFromLocalStorage(),
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  Sagamiddleware.run(RootSaga);
store.subscribe(() => saveToLocalStorage(store.getState()));
export default store;

