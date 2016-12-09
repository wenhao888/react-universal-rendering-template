import React from "react";
import {Route, IndexRoute} from "react-router";

import HomeLayout from "../components/layout/HomeLayout";
import Hello from "../components/Hello";
import CreateStudent from "../components/student/CreateStudent";

const routes= <Route path="/" component={HomeLayout}>
    <IndexRoute component={CreateStudent}/>
    <Route path="create" component={CreateStudent}/>
  </Route>;


export default routes;