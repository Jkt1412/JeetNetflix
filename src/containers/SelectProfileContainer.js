import React from "react"
import * as ROUTES from "../constants/routes"
import Header from '../components/Header/index'
import Profile from '../components/Profile/index'

function SelectProfileContainer({user , setProfile}){

    const userJSXList = user.map((ele) => {
        return (
        <Profile.Item onClick={() => {
            setProfile({
                displayName : ele.displayName,
                photoURL : ele.photoURL
            })
        }} key = {ele.photoURL} >
            <Profile.Image src={ele.photoURL} />
            <Profile.Name>{ele.displayName}</Profile.Name>
        </Profile.Item>
        )
    })

    return (
        <>
        <Header.Top>
            <Header.Logo to={ROUTES.HOME} src="/images/misc/logo.svg" />
        </Header.Top> 
        <Profile>
            <Profile.Title>Who's Watching?</Profile.Title>
            <Profile.List>
                {userJSXList}
            </Profile.List>
        </Profile>
        </>
    )
}

export default SelectProfileContainer