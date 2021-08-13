import React from "react"
import { Container , Inner , Title , Input , Button , Text , SmallText , StyledLink , Error} from "./styles/form"

function Form({children , ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

Form.Title = function FormTitle({children , ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

Form.Inner = function FormInner({children , ...restProps}){
    return <Inner {...restProps}>{children}</Inner>
}

Form.Input = function FormInput({children , ...restProps}){
    return <Input {...restProps}>{children}</Input>
}

Form.Button = function FormButton({children , ...restProps}){
    return <Button {...restProps}>{children}</Button>
}

Form.Text = function FormText({children , ...restProps}){
    return <Text {...restProps}>{children}</Text>
}

Form.SmallText = function FormSmallText({children , ...restProps}){
    return <SmallText {...restProps}>{children}</SmallText>
}

Form.StyledLink = function FormStyledLink({children , ...restProps}){
    return <StyledLink {...restProps}>{children}</StyledLink>
}

Form.Error = function FormError({ children, ...restProps }) {
    return <Error {...restProps}>{children}</Error>;
}

export default Form