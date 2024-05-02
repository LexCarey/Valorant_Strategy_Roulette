import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../../components/Header/Header'
import './Main.css'
import Strategies from '../../components/Strategies/Strategies'
import Agent_Select from '../../components/Agent_Select/Agent_Select'
import Map_Select from '../../components/Map_Select/Map_Select'

const Main = () => {
    const [strats, setStrats] = useState([])
    const [maps, setMaps] = useState([])
    const [agents, setAgents] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/agent-strategies/Astra/Lotus')
        .then(res => setStrats(res.data))
        .catch(err => console.log(err))
    }, [])

    useEffect(()=>{
        axios.get('https://valorant-api.com/v1/maps')
        .then(res => setMaps(res.data.data))
        .catch(err => console.log(err))
    }, [])

    useEffect(()=>{
        axios.get('https://valorant-api.com/v1/agents?isPlayableCharacter=true')
        .then(res => setAgents(res.data.data))
        .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <Header></Header>
            <div className='container'>
                <Strategies strats = {strats}></Strategies>
                <Agent_Select agents = {agents}></Agent_Select>
                <Map_Select maps = {maps}></Map_Select>
            </div>
        </div>
    )
}

export default Main