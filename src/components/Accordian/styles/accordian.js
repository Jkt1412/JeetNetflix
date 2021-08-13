import styled , {keyframes} from "styled-components"

const fadeIn = keyframes`
            0%{
                opacity:0;
            }
            100%{
                opacity:1;
            }
            `

export const Container = styled.section`
                    border-bottom: 8px solid #222;
                    `

export const Inner = styled.div`
                max-width : 800px;
                margin : auto;
                padding : 80px 50px;
                `

export const Title = styled.h1`
                text-align : center;
                font-size : 48px;
                color : white;
                `

export const Item = styled.div`
            color : white;
            margin-bottom : 10px;
            `

export const Header = styled.div`
                background-color : #303030;
                font-size : 28px;
                padding : 15px 0 15px 15px;
                display : flex;
                justify-content: space-between;
                align-items : center;
                cursor: pointer;
                margin-bottom: 1px;
                user-select: none;  

                img {
                    filter : brightness(0) invert(1);
                    width : 24px;
                    margin-right : 10px;
                }
                `

export const Body = styled.div`
            background-color : #303030;
            font-size : 28px;
            padding : 15px 0 15px 15px;
            margin-bottom: 8px;
            user-select: none;

            animation : 0.8s ${fadeIn} ease-in;
            `