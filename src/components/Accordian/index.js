import React , { useState , useContext , createContext }from "react"
import { Container, Inner , Title , Item , Header , Body} from "./styles/accordian"


const OnContext = createContext()


function Accordian({children , ...restProps}){
    return(
        <Container {...restProps}>
            <Inner {...restProps}>{children}</Inner>
        </Container>
    )
}

Accordian.Title = function AccordianTitle({children , ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

Accordian.Item = function AccordianItem({children , ...restProps}){

    const [on , setOn] = useState(false)
    
    return (<OnContext.Provider value = {{on , setOn}}>
                <Item {...restProps}>{children}</Item>
            </OnContext.Provider>)
}

Accordian.Header = function AccordianHeader({children , ...restProps}){

    const {on , setOn} = useContext(OnContext)

    return (<Header onClick = {() => {setOn(!on)}} {...restProps}>
                {children}
                {on? <img src="/images/icons/close-slim.png" alt="Close" /> :
                    <img src="/images/icons/add.png" alt="Open" />}
            </Header>)
}

Accordian.Body = function AccordianBody({children , ...restProps}){

    const {on} = useContext(OnContext)

    return ( on? <Body {...restProps}>{children}</Body> : null)
}


export default Accordian