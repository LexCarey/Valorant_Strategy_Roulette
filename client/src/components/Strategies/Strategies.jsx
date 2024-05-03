import React, { useEffect, useState } from 'react'
import './Strategies.css'


const Strategies = (props) => {
    const {strats} = props

    console.log(strats)

    return (
        <div className='strategy' style={{color: "white"}}>
            <h1 >{strats.title}</h1>
            <br/>
            <h1>{strats.strat}</h1>
            <br/>
            <h1>{strats.agents}</h1>
            <br/>
            <h1>{strats.maps}</h1>
            <br/>
            <br/>
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