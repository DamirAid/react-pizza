import { combineReducers } from "redux";
import { pizzaReducer } from "./pizzaReducer";
import { filterReducer } from "./filterReducer";
import { cartReducer } from "./cartReducer";
export const rootReducer = combineReducers({
	pizzaReducer,
	filterReducer,
	cartReducer
})

