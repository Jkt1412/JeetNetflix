import React from "react"
import BrowseContainer from '../containers/BrowseContainer'
import { useContent } from '../hooks/useContent'
import transformData from "../utils/transformData"

function Browse({user}){
    const { series } = useContent('series')
    const { films } = useContent('films')

    const slides = transformData({series , films})
    return <BrowseContainer slides = {slides} user = {user}/>
}

export default Browse