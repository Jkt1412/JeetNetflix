import styled from 'styled-components'

export const Inner = styled.div`
    display: flex;
    align-items: center;  
    justify-content : space-between;
    flex-direction : ${({ direction }) => direction};
    max-width : 1100px;
    margin : auto;
    width : 100%;
`

export const Item = styled.div`
                display:flex;
                border-bottom: 8px solid #222;
                padding: 50px 5%;
                color: white;
                overflow: hidden;
                `

export const Container = styled.section`
                    background-color:black;
                    `

export const Title = styled.h1`
                    font-size : 50px;
                    line-height : 1.1;
                    margin-bottom : 8px;
                    `

export const SubTitle = styled.h2`
                    font-size : 26px;
                    font-weight : normal;
                    line-height : normal;
                    `

export const Image = styled.img`
                max-width: 100%;
                height: auto;
                `

export const Pane = styled.div`
                width : 50%
                `