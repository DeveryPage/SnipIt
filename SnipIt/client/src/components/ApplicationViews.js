import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";


const ApplicationViews = ({ isLoggedIn }) => {
    return (
        <Switch>
            {/* <Route path="/" exact>
                {isLoggedIn ? <VideoList /> : <Redirect to="/login" />}

            </Route> */}

        </Switch>
    );
};

export default ApplicationViews;