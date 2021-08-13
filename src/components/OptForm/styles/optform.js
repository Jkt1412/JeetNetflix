import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.div`
                    padding : 40px 50px 60px 50px;
                    text-align : center;
                    color : white;
                    max-width : 700px;
                    margin : 0 auto;
                    `

export const Text = styled.p`
                font-size : 20px;`

export const Inner = styled.div`
display:flex;`

export const Input = styled.input`
            max-width: 450px;
            width: 100%;
            border: 0;
            padding: 5px;
            height: 50px;
            `

export const Button = styled.button`
                display: flex;
                align-items: center;
                height: 60px;
                background: #e50914;
                color: white;
                text-transform: uppercase;
                padding: 0 32px;
                font-size: 20px;
                border: 0;
                cursor: pointer;

                img {
                    margin-left: 10px;
                    filter: brightness(0) invert(1);
                    width: 24px;
                }

                &:hover {
                    background: #f40612;
                }
                `
export const StyledLink = styled(Link)`
                text-decoration : none;
                `