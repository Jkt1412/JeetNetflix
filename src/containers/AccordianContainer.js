import React from "react"
import Accordian from "../components/Accordian/index"
import faqData from "../fixtures/faqs.json"
import OptForm from "../components/OptForm/index"

function AccordianContainer(){

    const faqJSXList = faqData.map(element => (
        <Accordian.Item key={element.id}>
            <Accordian.Header>{element.header}</Accordian.Header>
            <Accordian.Body>{element.body}</Accordian.Body>
        </Accordian.Item>
    ))

    return(
        <Accordian>
            <Accordian.Title>Frequently Asked Questions</Accordian.Title>
            {faqJSXList}
            <OptForm>
            <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
            <OptForm.Inner>
                <OptForm.Input placeholder="Email Address" />
                <OptForm.Button>Get Started</OptForm.Button>
            </OptForm.Inner>
            </OptForm>
        </Accordian>
    )

}

export default AccordianContainer