import React from "react";
import {Route, IndexRoute} from "react-router";

import HomeLayout from "../components/layout/HomeLayout";
import Hello from "../components/Hello";

const routes= <Route path="/" component={HomeLayout}>
    <IndexRoute component={Hello}/>
  </Route>



export default routes;