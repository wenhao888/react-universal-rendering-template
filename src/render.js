import React from "react";
import {renderToString} from 'react-dom/server'
import {match, RouterContext} from 'react-router'
import { Provider} from 'react-redux';
import { ReduxAsyncConnect, loadOnServer, reducer as reduxAsyncConnect } from 'redux-async-connect'
import routes from "./routes/route";
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'



function render(req, res, next) {
    match({routes, location: "/"}, (error, redirectLocation, renderProps) => {
        console.log(renderProps);

        const store = createStore(combineReducers({reduxAsyncConnect, form:formReducer}));

        loadOnServer({...renderProps, store:store}).then(() => {


            const appHTML = renderToString(
                <Provider store={store} key="provider">
                    <ReduxAsyncConnect {...renderProps} />
                </Provider>
            );

            // 3. render the Redux initial data into the server markup
            res.render("reactContainer", {content: appHTML});
        })


    });
}

export default render;
