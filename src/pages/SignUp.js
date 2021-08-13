import React , {useState , useContext} from "react"
import { FirebaseContext } from "../context/firebase"
import { useHistory } from "react-router-dom"
import Header from "../components/Header/index"
import Form from "../components/Form/index"
import FooterContainer from '../containers/FooterContainer'
import * as ROUTES from '../constants/routes'

function SignUp(){
    const history = useHistory()
    const { firebase } = useContext(FirebaseContext)
    const [error, setError] = useState('');
    const [firstName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    
    const isInvalid = firstName === '' | password === '' | emailAddress === '';
    
    const handleSignup = (event) => {
        event.preventDefault();
        
        firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress , password)
            .then((result) => 
                    result.user
                    .updateProfile({
                        displayName : firstName,
                        photoURL : Math.floor(Math.random() * 5) + 1
                    })
                    .then(() => {
                        setEmailAddress('')
                        setPassword('')
                        setError('')
                        history.push(ROUTES.BROWSE)
                    })
            ).catch((error) => {
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
                <Form.Title>Sign Up</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}
                <Form.Inner onSubmit={handleSignup} method="POST">
                    <Form.Input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={({ target }) => setFirstName(target.value)} 
                    />
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
                    <Form.Button disabled={isInvalid} type="submit">Sign Up</Form.Button>
                    <Form.Text>
                        Already a user? 
                        <Form.StyledLink to='/signin'>Sign in now.</Form.StyledLink>
                    </Form.Text>
                    <Form.SmallText>This page is protected by Google reCAPTCHA to ensure you're not a bot.</Form.SmallText>
                </Form.Inner>
            </Form>
        </Header>
        <FooterContainer />
        </>
    )
}

export default SignUp