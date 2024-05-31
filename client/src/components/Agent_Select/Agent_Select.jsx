import React, { useEffect, useState } from 'react'
import './Agent_Select.css'
import Agent_Choice from '../Agent_Choice/Agent_Choice'


const Agent_Select = (props) => {
    const {agents, setSelectedAgents} = props
    const [agent1, setAgent1] = useState("")
    const [agent2, setAgent2] = useState("")
    const [agent3, setAgent3] = useState("")
    const [agent4, setAgent4] = useState("")
    const [agent5, setAgent5] = useState("")

    useEffect(() => {
        const tempStr = [agent1, agent2, agent3, agent4, agent5].join(' ');
        setSelectedAgents(tempStr);
        console.log('ran! ' + tempStr);
    }, [agent1, agent2, agent3, agent4, agent5, setSelectedAgents]);

    return (
        <div className='agentIcons'>
            <Agent_Choice agents = {agents} setAgent = {setAgent1}></Agent_Choice>
            <Agent_Choice agents = {agents} setAgent = {setAgent2}></Agent_Choice>
            <Agent_Choice agents = {agents} setAgent = {setAgent3}></Agent_Choice>
            <Agent_Choice agents = {agents} setAgent = {setAgent4}></Agent_Choice>
            <Agent_Choice agents = {agents} setAgent = {setAgent5}></Agent_Choice>
        </div>
    )
}

export default Agent_Select