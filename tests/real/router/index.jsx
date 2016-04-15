import React from "react";
import {Router} from 'react-router';
import routes from "./routes";
import history from './history';

export default (<Router history={history}>{routes}</Router>);
