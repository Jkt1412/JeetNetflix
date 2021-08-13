import React , {useState , useContext} from "react"
import { useHistory } from "react-router-dom"
import {FirebaseContext} from "../context/firebase"
import Header from "../components/Header/index"
import Form from "../components/Form/index"
import FooterContainer from '../containers/FooterContainer'
import * as ROUTES from '../constants/routes'


function SignIn(){
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext)

    const [error, setError] = useState('');
    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')
    
    const isInvalid = password === '' | emailAddress === ''
    
    const handleSignin = (event) => {
        event.preventDefault()
        
        firebase
            .auth()
            .signInWithEmailAndPassword(emailAddress, password)
            .then(() => {
                history.push(ROUTES.BROWSE)
            })
            .catch((error) => {
                setEmailAddress('')
                setPassword('')
                setError(error.message)})
    }

    return (
        <>
        <Header>    
            <Header.Top>
                <Header.Logo to="/" src="/images/misc/logo.svg" />
            </Header.Top>
            <Form>
                <Form.Title>Sign In</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}
                <Form.Inner onSubmit={handleSignin} method="POST">
                    <Form.Input
                    type="email"
                    placeholder="Email address"
                    value={emailAddress}
                    onChange={({ target }) => setEmailAddress(target.value)} 
                    />
                    <Form.Input
                    type="password"
                    value={password}
                    autoComplete="off"
                    placeholder="Password"
                    onChange={({ target }) => setPassword(target.value)} 
                    />
                    <Form.Button disabled={isInvalid} type="submit">Sign In</Form.Button>
                    <Form.Text>
                        New to Netflix? 
                        <Form.StyledLink to='/signup'>Sign up now.</Form.StyledLink>
                    </Form.Text>
                    <Form.SmallText>This page is protected by Google reCAPTCHA to ensure you're not a bot.</Form.SmallText>
                </Form.Inner>
            </Form>
        </Header>
        <FooterContainer />
        </>
    )
}

export default SignIn

