import React from "react"
import Jumbotron from "../components/Jumbotron/index"
import jumboData from '../fixtures/jumbo.json'


function JumbotronContainer(){
    
    const JumboJSXList = jumboData.map((element) => {
        return (
            <Jumbotron key = {element.id} direction={element.direction}>
                <Jumbotron.Pane> 
                    <Jumbotron.Title>{element.title}</Jumbotron.Title>
                    <Jumbotron.SubTitle>{element.subTitle}</Jumbotron.SubTitle>
                </Jumbotron.Pane>
                <Jumbotron.Pane> 
                    <Jumbotron.Image src={element.image} alt={element.alt} />
                </Jumbotron.Pane>
            </Jumbotron>
        )
    })

    return (
        <Jumbotron.Container>
            {JumboJSXList}
        </Jumbotron.Container>
    )
}

export default JumbotronContainer