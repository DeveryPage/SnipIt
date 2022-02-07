import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import SnipItList from "./SnipItList";
import SnipItForm from "./SnipItForm";
import LanguageList from "./LanguageList";
import LanguageForm from "./LanguageForm";
import TagList from "./TagList";
import TagForm from "./TagForm";


const ApplicationViews = ({ isLoggedIn }) => {
    return (
        <Switch>
            <Route path="/" exact>
                {isLoggedIn ? <SnipItList /> : <Redirect to="/login" />}
            </Route>

            <Route path="/snipit/create" exact>
                {isLoggedIn ? <SnipItForm /> : <Redirect to="/login" />}
            </Route>


            <Route path="/snipit/create/:id" exact>
                {isLoggedIn ? <SnipItForm /> : <Redirect to="/login" />}
            </Route>

            <Route path="/languages" exact>
                {isLoggedIn ? <LanguageList /> : <Redirect to="/login" />}
            </Route>

            <Route path="/languages/create" exact>
                {isLoggedIn ? <LanguageForm /> : <Redirect to="/login" />}
            </Route>

            <Route path="/languages/create/:id" exact>
                {isLoggedIn ? <LanguageForm /> : <Redirect to="/login" />}
            </Route>

            <Route path="/tags" exact>
                {isLoggedIn ? <TagList /> : <Redirect to="/login" />}
            </Route>

            <Route path="/tags/create" exact>
                {isLoggedIn ? <TagForm /> : <Redirect to="/login" />}
            </Route>

            <Route path="/tags/create/:id" exact>
                {isLoggedIn ? <TagForm /> : <Redirect to="/login" />}
            </Route>

            {/* <Route path="/languages" exact>
                {isLoggedIn ? <LanguageList /> : <Redirect to="/login" />}
            </Route> */}

            <Route path="/login">
                <Login />
            </Route>

            <Route path="/register">
                <Register />
            </Route>
        </Switch>
    );
};

export default ApplicationViews;