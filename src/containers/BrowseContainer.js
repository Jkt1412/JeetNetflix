import React, { useState , useContext , useEffect } from "react"
import { useHistory } from "react-router-dom"
import Fuse from "fuse.js"
import FooterContainer from "./FooterContainer"
import SelectProfileContainer from './SelectProfileContainer'
import Header from '../components/Header/index'
import Card from '../components/Card/index'
import Loading from '../components/Loading/index'
import Player from '../components/Player/index'
import * as ROUTES from '../constants/routes'
import {FirebaseContext} from '../context/firebase'

function BrowseContainer({ slides , user}){


    const [profile , setProfile] = useState({})
    const [category , setCategory] = useState('series')
    const [searchActive , setSearchActive] = useState(false)
    const [loading, setLoading] = useState(true)
    const [searchTerm , setSearchTerm] = useState('')
    const [slideRows , setSlideRows] = useState([])
    const { firebase } = useContext(FirebaseContext)
    const history = useHistory()

    const userProfile = [{
        displayName: user.displayName,
        photoURL: user.photoURL
    }]

    const profileJSXList = userProfile.map((element) => {
        return (
            <Header.Group onClick={() => {setProfile(element)}} key={element.displayName}>
                <Header.ProfilePicture src = {element.photoURL} />
                <Header.TextLink>{element.displayName}</Header.TextLink>
            </Header.Group>
        )
    })

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000);
    }, [])


    useEffect(() => {
        setSlideRows(slides[category])
    } , [category , slides])

    useEffect(() => {
        const fuse = new Fuse(slideRows , {keys : ['data.description' , 'data.title' , 'data.genre']})
        const results = fuse.search(searchTerm).map(({item}) => item)
        if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0){
            setSlideRows(results)
        }
        else{
            setSlideRows(slides[category])
        }
    } , [searchTerm])

    return profile.displayName ? 
    (<>
        {loading ? <Loading src={profile.photoURL} /> : <Loading.ReleaseBody />}
        <Header src="joker1" >
            <Header.Top>
                <Header.Group>
                    <Header.Logo to={ROUTES.HOME} src="/images/misc/logo.svg" />
                    <Header.TextLink
                        active = {category === 'series' ? true : false}
                        onClick = {() => {setCategory('series')}}>
                        Series
                    </Header.TextLink>
                    <Header.TextLink
                        active = {category === 'films' ? true : false}
                        onClick = {() => {setCategory('films')}}>
                        Films
                    </Header.TextLink>
                </Header.Group>
                <Header.Group>
                    <Header.SearchIcon
                    onClick = {() => setSearchActive(!searchActive)} >
                        <img src='/images/icons/search.png' alt='Search' />
                    </Header.SearchIcon>
                    <Header.SearchInput 
                    active = {searchActive}
                    value = {searchTerm}
                    placeholder = "Search Films and Series"
                    onChange = {({target}) => setSearchTerm(target.value)} />

                    <Header.Profile>
                        <Header.ProfilePicture src = {profile.photoURL} />
                        <Header.Dropdown>
                            {profileJSXList}
                            <Header.Group>
                                <Header.TextLink 
                                onClick = {() => {
                                    firebase.auth().signOut()
                                    setProfile({})
                                    history.push(ROUTES.HOME)}}>Sign Out</Header.TextLink>
                            </Header.Group>
                        </Header.Dropdown>
                    </Header.Profile>
                </Header.Group>
            </Header.Top>
            <Header.Feature>
                <Header.FeatureTitle>Watch Joker Now</Header.FeatureTitle>
                <Header.FeatureText>
                    Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
                    City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
                    futile attempt to feel like he's part of the world around him.
                </Header.FeatureText>
                <Player>
                    <Player.Button />
                    <Player.Video />
                </Player>
            </Header.Feature>
        </Header>
        <Card.Group>
            {slideRows.map(slideItem => {
                return (
                    <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
                        <Card.Title>{slideItem.title}</Card.Title>
                        <Card.Entities>
                            {slideItem.data.map(item => {
                                return (
                                    <Card.Item key = {item.docId} item={item}>
                                        <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                                        <Card.Meta>
                                            <Card.SubTitle>{item.title}</Card.SubTitle>
                                            <Card.Text>{item.description}</Card.Text>
                                        </Card.Meta>
                                    </Card.Item>
                                )
                            })}
                        </Card.Entities>
                        <Card.Feature category={category}>
                            <Player>
                                <Player.Button />
                                <Player.Video />
                            </Player>
                        </Card.Feature>
                    </Card>
                )
            })}
        </Card.Group>
        <FooterContainer />
    </>) :
    (<SelectProfileContainer user={userProfile} setProfile={setProfile} />)
}

export default BrowseContainer