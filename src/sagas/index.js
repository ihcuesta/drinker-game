import levelsSagas from "./levelsSagas";
import { all } from "redux-saga/effects";

export default function* rootSagas() {
  yield all([...levelsSagas]);
}
