import React from 'react'
import { Switch , Route } from 'react-router-dom'
import * as ROUTES from "./constants/routes"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Browse from './pages/Browse'
import { useAuthListener } from './hooks/useAuthListener'
import { IsUserRedirect, ProtectedRoute } from './helpers/routes'


function App() {

    const { user } = useAuthListener()
    console.log(user)

    return (
        <Switch>
            <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
                <SignIn />
            </IsUserRedirect>
            <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
                <SignUp />
            </IsUserRedirect>
            <ProtectedRoute user={user} path={ROUTES.BROWSE}>
                <Browse user={user}/>
            </ProtectedRoute>
            <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
                <Home />
            </IsUserRedirect>
        </Switch>
  )
}

export default App