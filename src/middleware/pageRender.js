import React from "react";
import {renderToString} from 'react-dom/server'
import {match, RouterContext} from 'react-router'
import routes from "../routes/route";


function pageRender(req, res, next) {
    match({routes, location: req.url}, (error, redirectLocation, renderProps) => {

        const content = renderToString(
            <RouterContext {...renderProps} />
        );

        res.render("reactContainer", {content: content});

    });


}

export default pageRender;
