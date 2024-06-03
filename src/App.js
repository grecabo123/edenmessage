import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from "react";
import FrontPage from './components/FrontPage';

function App() {

    return (
        <>
            <Router>
                <Switch>
                    <Route to="/" exact={true} component={FrontPage}></Route>
                </Switch>
            </Router>
        </>

    )
}

export default App