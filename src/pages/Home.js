import React from 'react'
import JumbotronContainer from '../containers/JumbotronContainer'
import FooterContainer from '../containers/FooterContainer'
import AccordianContainer from '../containers/AccordianContainer'
import HeaderContainer from '../containers/HeaderContainer'

function Home() {
    return (
        <>
        <HeaderContainer />
        <JumbotronContainer />
        <AccordianContainer />
        <FooterContainer />
        </>
    )
}

export default Home