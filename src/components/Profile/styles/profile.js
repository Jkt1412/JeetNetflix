import styled from "styled-components"

export const Container = styled.div`
                    display : flex;
                    flex-direction : column;
                    max-width : 80%;
                    margin : auto;
                    align-items : center;`

export const Title = styled.h1`
                    width : 100%;
                    text-align : center;
                    color : white;
                    font-size : 48px;
                    font-weight : 500;`

export const List = styled.ul`
                    display : flex;
                    flex-direction : row;
                    padding: 0;
                    margin : 0;
                    `

export const Image = styled.img`
                width: 100%;
                max-width: 150px;
                height: auto;
                border: 3px solid black;
                cursor: pointer;
                `

export const Name = styled.p`
                color: #808080;
                text-overflow: ellipsis;
                font-size: 16px;

                &:hover {
                    font-weight: bold;
                    color: #e5e5e5;
                }`

                export const Item = styled.li`
                max-height: 200px;
                max-width: 200px;
                list-style-type: none;
                text-align: center;
                margin-right: 30px;

                &:hover > ${Image} {
                    border: 3px solid white;
                }

                &:hover > ${Name} {
                    font-weight: bold;
                    color: white;
                }

                &:last-of-type {
                    margin-right: 0;
                }
                `

