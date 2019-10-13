import { createStore, appMiddleware } from "redux";
import rootReducer from "./reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

export default function configureStore(initialState) {
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose;
    return createStore(
        rootReducer,
        initialState,
        compose(appMiddleware(reduxImmutableStateInvariant()))
    );
}
