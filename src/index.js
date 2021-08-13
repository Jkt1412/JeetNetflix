import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter as Router } from "react-router-dom"
import { GlobalStyles } from './global-styles'
import { FirebaseContext } from './context/firebase'

//import { seedDatabase } from './seed'

const config = {
    apiKey: "AIzaSyCqojxu7d8YnhFQ6otpid6p6_REVtkAg0M",
    authDomain: "netflix-jeet-clone.firebaseapp.com",
    projectId: "netflix-jeet-clone",
    storageBucket: "netflix-jeet-clone.appspot.com",
    messagingSenderId: "624889692099",
    appId: "1:624889692099:web:1cb01e916dca35766b8776"
}

const firebase = window.firebase.initializeApp(config)

//seedDatabase(firebase)




ReactDOM.render(<FirebaseContext.Provider value = {{firebase:window.firebase}}>
                    <Router>
                        <GlobalStyles />
                        <App />
                    </Router>
                </FirebaseContext.Provider>, document.getElementById('root'))