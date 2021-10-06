import { all } from "@redux-saga/core/effects";
import Data from "./Sagas/DataSaga"

export default function* rootSaga() {
    return yield all([Data]);
  }