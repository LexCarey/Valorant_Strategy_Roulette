import React from 'react'
import Header from '../../components/Header/Header'
import './Main.css'
import Strategies from '../../components/Strategies/Strategies'
import Agent_Select from '../../components/Agent_Select/Agent_Select'
import Map_Select from '../../components/Map_Select/Map_Select'

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Strategies></Strategies>
            <Agent_Select></Agent_Select>
            <Map_Select></Map_Select>
        </div>
    )
}

export default Main