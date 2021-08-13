import React from "react"
import { Container , Title , List , Item , Image , Name } from './styles/profile'

function Profile({children , ...restProps}){
    return <Container {...restProps}>{children}</Container> 
}

Profile.Title = function ProfileTitle({children , ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

Profile.List = function ProfileList({children , ...restProps}){
    return <List {...restProps}>{children}</List>
}

Profile.Item = function ProfileItem({children , ...restProps}){
    return <Item {...restProps}>{children}</Item>
}

Profile.Image = function ProfileImage({src , ...restProps}){
    return <Image 
            src={src ? `/images/users/${src}.png` : `/images/misc/loading-gif`}
            {...restProps} />
}

Profile.Name = function ProfileName({children , ...restProps}){
    return <Name {...restProps}>{children}</Name>
}

export default Profile