import React from "react"
import {Container, Text , Inner , Input , Button , StyledLink} from './styles/optform'

function OptForm({children , ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

OptForm.Text = function OptFormText({children , ...restProps}){
    return <Text {...restProps}>{children}</Text>
}

OptForm.Inner = function OptFormInner({children , ...restProps}){
    return <Inner {...restProps}>{children}</Inner>
}

OptForm.Input = function OptFormInput({children , ...restProps}){
    return <Input {...restProps}>{children}</Input>
}

OptForm.Button = function OptFormButton({children , ...restProps}){
    return (<StyledLink to="/signup">
                <Button {...restProps}>{children} <img src="/images/icons/chevron-right.png" alt="Try Now" /></Button>
            </StyledLink>)
}

export default OptForm
