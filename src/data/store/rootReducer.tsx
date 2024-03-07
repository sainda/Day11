import { combineReducers } from "redux";
import { reducer as countrieReducer } from "../slices/countries"

const rootReducer=combineReducers({
    countries:countrieReducer

})
export default rootReducer