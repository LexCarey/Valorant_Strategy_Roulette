import React, { useEffect, useState } from 'react'
import './Agent_Select.css'
import axios from 'axios'


const Agent_Select = () => {
    const [Agents, setAgents] = useState([])

    useEffect(()=>{
        axios.get('https://valorant-api.com/v1/agents?isPlayableCharacter=true')

        .then(res => setAgents(res.data.data))
        .catch(err => console.log(err))
    }, [])

    return (
        <div className=''>
            
            {
                Agents != "" ?
                    Agents.map((entry, i) =>
                        <tr key={i} style={{color: "white", fontFamily: "valorant"}}>
                            <img className='agentImage' src={entry.displayIcon} alt={entry.displayName} />
                            <br/>
                            {entry.displayName}
                            <br/>
                            <br/>
                        </tr>
                    )
                :
                <h1>Loading...</h1>
            }
        </div>
    )
}

export default Agent_Select