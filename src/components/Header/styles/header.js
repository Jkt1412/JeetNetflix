import styled from "styled-components"
import { Link } from "react-router-dom"

                 


export const Container = styled.section`
                background: url(${({ src }) => (src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg')}) top left / cover no-repeat;
                padding-bottom : 100px;
                border-bottom : 8px solid #222;
                `

export const Group = styled.div`
                display : flex;
                flex-direction : row;
                align-items : center;
                `

export const Top = styled.div`
                display : flex;
                justify-content : space-between;
                align-items : center;
                margin: 0 56px;
                padding : 18px 0;
                `

export const Logo = styled.img`
                width: 108px;
                height: 32px;
                margin-right: 30px;
                `

export const ButtonLink = styled(Link)`
                    display: block;
                    background-color: #e50914;
                    width: 84px;
                    height: fit-content;
                    color: white;
                    border: 0;
                    font-size: 15px;
                    border-radius: 3px;
                    padding: 8px 17px;
                    cursor: pointer;
                    text-decoration: none;
                    box-sizing: border-box;

                    &:hover {
                        background: #f40612;
                    }`

export const Inner = styled.section`
                margin-top : 90px;
                text-align : center;
                color : white;
                `

export const Title = styled.h1`
                font-size: 50px;
                max-width: 550px;
                margin : 0 auto;
                `

export const SubTitle = styled.h2`
                font-size: 30px;
                margin : 20px auto 0 auto;
                width: fit-content;
                font-weight : normal;
                `

export const TextLink = styled.p`
                color : white;
                margin-right : 15px;
                font-weight : ${({active}) => active ? "bold" : "normal"};
                cursor : pointer;
                &:last-of-type{
                    margin-left:10px;
                }
                &:hover {
                    font-weight : bold;
                }`

export const Feature = styled.div`
                max-width : 45%;
                margin : 80px 0px 140px 50px;
                `

export const FeatureTitle = styled.h1`
                color : white;
                font-size : 50px;
                font-weight : bold;
                margin : 0;
                text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45)
                `

export const FeatureText = styled.p`
                color : white;
                font-size : 22px;
                text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45)
                `

export const PlayButton = styled.button`
                padding : 7px 30px;
                font-weight : bold;
                font-size : 16px;
                border-radius : 4px;
                border : none;
                cursor : pointer;
                
                &:hover{
                    color : white;
                    background-color : #ff1e1e;
                }
                `

export const SearchIcon = styled.button`
                cursor: pointer;
                background-color: transparent;
                border: 0;

                img {
                    filter: brightness(0) invert(1);
                    width : 16px;
                }
                `

export const SearchInput = styled.input`
                background-color: #44444459;
                color : white;
                border: 1px solid white;
                transition: width 0.5s;
                height: 30px;
                font-size: 14px;
                margin-left: ${({ active }) => (active === true ? '10px' : '0')};
                padding: ${({ active }) => (active === true ? '0 10px' : '0')};
                opacity: ${({ active }) => (active === true ? '1' : '0')};
                width: ${({ active }) => (active === true ? '200px' : '0px')};
                `

export const Dropdown = styled.div`
                display : none;
                position : absolute;
                background-color : rgba(0,0,0,0.9);
                top : 32px;
                right : 10px;
                padding : 10px 25px;
                width : 100px;
                
                ${Group} {
                    margin-bottom: 10px;
                    
                    &:last-of-type {
                        margin-bottom: 0;
                    }
                }

                button {
                    margin-right: 5px;
                }
                `

export const Profile = styled.div`
                display : flex;
                flex-direction : column;
                align-items: center;
                margin-left: 20px;
                position: relative;

                &:hover > ${Dropdown}{
                    display : flex;
                    flex-direction : column;
                }
                `

export const ProfilePicture = styled.button`
                background : url(${({src}) => src});
                background-size : contain;
                width : 32px;
                height : 32px;
                border : 0;
                cursor : pointer;
                border-radius : 5px;
                `

