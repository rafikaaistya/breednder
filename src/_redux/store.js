import { createStore, combineReducers, applyMiddleware } from "redux";
import species from "../_reducers/species";
import premium from "../_reducers/premium";
import user from "../_reducers/user";
import { logger, promise } from "../middleware";

// Global state
const rootReducers = combineReducers({
  species,
  premium,
  user
});

// Setup store for Redux
const store = createStore(rootReducers, applyMiddleware(logger, promise));

export default store;
