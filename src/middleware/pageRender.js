import React from "react";
import { renderToString } from 'react-dom/server'

import Hello from "../components/Hello";


function pageRender (req, res, next) {
    const content = renderToString(
        <Hello/>
    );

    res.render("reactContainer", {content: content});

}

export default pageRender;
