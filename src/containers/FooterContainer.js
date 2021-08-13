import React from "react"
import Footer from "../components/Footer/index"

function FooterContainer(){
    const RICK_ROLL = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    return (
        <Footer>
            <Footer.Title>Questions? Call 1-844-505-2993</Footer.Title>
            <Footer.Break />
            <Footer.Row>
                
                <Footer.Column>
                    <Footer.Link target="_blank" href={RICK_ROLL}>FAQ</Footer.Link>
                    <Footer.Link target="_blank" href={RICK_ROLL}>Investor Relations</Footer.Link>
                    <Footer.Link target="_blank" href={RICK_ROLL}>Ways to Watch</Footer.Link>
                    <Footer.Link target="_blank" href={RICK_ROLL}>Corporate Information</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link target="_blank" href={RICK_ROLL}>Help Center</Footer.Link>
                    <Footer.Link target="_blank" href={RICK_ROLL}>Jobs</Footer.Link>
                    <Footer.Link target="_blank" href={RICK_ROLL}>Terms of Use</Footer.Link>
                    <Footer.Link target="_blank" href={RICK_ROLL}>Contact Us</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link target="_blank" href={RICK_ROLL}>Account</Footer.Link>
                    <Footer.Link target="_blank" href={RICK_ROLL}>Redeem Gift Cards</Footer.Link>
                    <Footer.Link target="_blank" href={RICK_ROLL}>Privacy</Footer.Link>
                    <Footer.Link target="_blank" href={RICK_ROLL}>Speed Test</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link target="_blank" href={RICK_ROLL}>Media Center</Footer.Link>
                    <Footer.Link target="_blank" href={RICK_ROLL}>Buy Gift Cards</Footer.Link>
                    <Footer.Link target="_blank" href={RICK_ROLL}>Cookie Preferences</Footer.Link>
                    <Footer.Link target="_blank" href={RICK_ROLL}>Legal Notices</Footer.Link>
                </Footer.Column>

            </Footer.Row>
            <Footer.Break />
            <Footer.Text>Netflix United States</Footer.Text>
        </Footer>
    )

}

export default FooterContainer