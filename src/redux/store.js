import { createStore } from "redux";
import cartReducer from "./reducer/reducer";

export const cartStore = createStore(cartReducer)