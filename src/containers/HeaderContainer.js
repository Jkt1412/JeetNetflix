import React from "react"
import Header from "../components/Header/index"
import OptForm from "../components/OptForm/index"
import * as ROUTES from "../constants/routes"

function HeaderContainer(){
    return (
        <Header>
            <Header.Top>
                <Header.Logo to="/" src="/images/misc/logo.svg" />
                <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
            </Header.Top>
            <Header.Inner>
                <Header.Title>Unlimited movies, TV shows, and more.</Header.Title>
                <Header.SubTitle>Watch anywhere. Cancel anytime.</Header.SubTitle>
            </Header.Inner>
            <OptForm>
            <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
            <OptForm.Inner>
                <OptForm.Input placeholder="Email Address" />
                <OptForm.Button>Get Started</OptForm.Button>
            </OptForm.Inner>
            </OptForm>

        </Header>
    )
}

export default HeaderContainer