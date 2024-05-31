import React, { useEffect, useState } from 'react'
import './Strategies.css'


const Strategies = (props) => {
    const {strats} = props



    return (
        <div className='strategy'>
            <div className='fullStrat'>
                <h1 className='title'>{strats.title}</h1>
                <h1 className='description'>{strats.strat}</h1>
            </div>
            
            
            <div className='requiredAgentsMaps'>
            { Array.isArray(strats.agents) && strats.agents.length > 0 &&
                    <h1>Required Agents: {strats.agents.map((s, i) => (
                        <span>{s}{(strats.agents.length - 1 !== i) && ', '}</span>
                    ))}</h1>
                }
                { Array.isArray(strats.maps) && strats.maps.length > 0 &&
                    <h1>Maps: {strats.maps.map((s, i) => (
                        <span>{s}{(strats.maps.length - 1 !== i) && ', '}</span>
                    ))}</h1>
                }
            </div>
        </div>
    )
}

export default Strategies


/*
{ 
                strats.map((entry, i) =>
                    <tr key={i} style={{color: "white"}}>
                        {entry.title}
                        <br/>
                        {entry.strat}
                        <br/>
                        {entry.agents}
                        <br/>
                        {entry.maps}
                        <br/>
                        <br/>
                    </tr>
                )
            }
*/