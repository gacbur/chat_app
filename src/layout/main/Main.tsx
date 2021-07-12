import { Switch, Route } from 'react-router-dom'

import React from 'react'

import Login from '../../pages/login/Login'

const Main = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Login} />
            </Switch>
        </>
    )
}

export default Main
