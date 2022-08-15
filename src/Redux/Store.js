import { legacy_createStore as createStore } from "@reduxjs/toolkit";
import rootred from "./Reducers/Main";

const store =createStore(
    rootred
)
export default store