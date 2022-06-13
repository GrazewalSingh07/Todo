import { createStore,applyMiddleware,combineReducers} from "redux";

import thunk from "redux-thunk";
import { authReducer } from "./Auth/reducer";
import { todoreducer } from "./todo/reducer";
const rootReducer=combineReducers({
    todo:todoreducer,
    auth:authReducer
})
export const store=createStore(rootReducer,applyMiddleware(thunk))
