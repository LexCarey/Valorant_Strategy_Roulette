import React, { useState } from 'react'
import './Agent_Choice.css'

const Agent_Choice = (props) => {
    const {agents} = props
    const [agentMenu, setagentMenu] = useState(false)
    const [selectedAgent, setSelectedAgent] = useState(false)

    let agentMenuTrue = () => {
        setagentMenu(!agentMenu)
    }

    let agentSelect = (agent = []) => {
        setagentMenu(!agentMenu)
        setSelectedAgent(agent)
    }

    return (
        <div>
            <div className='agent-choice' onClick={agentMenuTrue}>
                {
                    selectedAgent ?
                    <img className='selected-agent' src={selectedAgent.displayIcon} alt={selectedAgent.displayName} />
                    :
                    <h1 className='plus'>+</h1>
                }
            </div>
            <div className='mini-agents'>
            { agentMenu &&
                agents.map((entry, i) =>
                <div className='mini-agent-select' key={i} style={{color: "white", fontFamily: "valorant"}} onClick={(e) => agentSelect(entry)}>
                    <img className='agentImage' src={entry.displayIcon} alt={entry.displayName} />
                    <br/>
                    {entry.displayName}
                    <br/>
                    <br/>
                </div>
                )
            }
            </div>
        </div>
    )
}

export default Agent_Choice


/*
{
    agents.map((entry, i) =>
    <div key={i} style={{color: "white", fontFamily: "valorant"}}>
        <img className='agentImage' src={entry.displayIcon} alt={entry.displayName} />
        <br/>
        {entry.displayName}
        <br/>
        <br/>
    </div>
)
}
*/