import React from "react"
import { Container , Top , Logo , ButtonLink , Inner , Title , SubTitle,
         Group , TextLink , Feature , FeatureTitle , FeatureText , PlayButton,
        SearchIcon , SearchInput , Profile , ProfilePicture , Dropdown } from './styles/header'
import { Link } from 'react-router-dom'

function Header({children , ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

Header.Top = function HeaderTop({children , ...restProps}){
    return <Top {...restProps}>{children}</Top>
}

Header.Logo = function HeaderLogo({to , ...restProps}){
    return (
        <Link to={to}>
            <Logo {...restProps} />
        </Link>
    )
}

Header.ButtonLink = function HeaderButtonLink({to , children , ...restProps}){
    return <ButtonLink to={to} {...restProps}>{children}</ButtonLink>
}

Header.Inner = function HeaderInner({children , ...restProps}){
    return <Inner {...restProps}>{children}</Inner>
}

Header.Title = function HeaderTitle({children , ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

Header.SubTitle = function HeaderSubTitle({children , ...restProps}){
    return <SubTitle {...restProps}>{children}</SubTitle>
}

Header.Feature = function HeaderFeature({children , ...restProps}){
    return <Feature {...restProps}>{children}</Feature>
}

Header.Group = function HeaderGroup({children , ...restProps}){
    return <Group {...restProps}>{children}</Group>
}

Header.TextLink = function HeaderTextLink({active , children , ...restProps}){
    return <TextLink active={active} {...restProps}>{children}</TextLink>
}

Header.FeatureTitle = function HeaderFeatureTitle({children , ...restProps}){
    return <FeatureTitle {...restProps}>{children}</FeatureTitle>
}

Header.FeatureText = function HeaderFeatureText({children , ...restProps}){
    return <FeatureText {...restProps}>{children}</FeatureText>
}

Header.PlayButton = function HeaderPlayButton({children , ...restProps}){
    return <PlayButton {...restProps}>{children}</PlayButton>
}

Header.SearchIcon = function HeaderSearchIcon({children , ...restProps}){
    return <SearchIcon {...restProps}>{children}</SearchIcon>
}

Header.SearchInput = function HeaderSearchInput({ active , children , ...restProps}){
    return <SearchInput active={active} {...restProps}>{children}</SearchInput>
}

Header.Profile = function HeaderProfile({ children , ...restProps }){
    return <Profile {...restProps}>{children}</Profile>
}

Header.ProfilePicture = function HeaderProfilePicture({ src , ...restProps }){
    return <ProfilePicture src={`/images/users/${src}.png`} {...restProps}/>
}

Header.Dropdown = function HeaderDropdown({ children , ...restProps }){
    return <Dropdown {...restProps}>{children}</Dropdown>
}



export default Header