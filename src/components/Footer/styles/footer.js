import styled from "styled-components"

export const Container = styled.div`
                    padding: 70px 56px;
                    display: flex;
                    flex-direction: column;
                    color: #757575;
                    max-width: 1000px;
                    margin:auto;
                    `

export const Title = styled.div`
                font-size: 16px;
                color: #757575;
                margin-bottom: 40px;
                `

export const Row = styled.div`
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
                grid-gap: 15px;
                `

export const Column = styled.div`
                display: flex;
                flex-direction: column;
                text-align: left;
                `

export const Text = styled.div`
                font-size: 13px;
                color: #757575;
                margin-bottom: 40px;
                `

export const Break = styled.div`
                flex-basis: 100%;
                height: 0;
                `

export const Link = styled.a`
                color: #757575;
                margin-bottom: 20px;
                font-size: 13px;
                text-decoration: none;
                `