import React, { useEffect, useState } from 'react'
import './Strategies.css'


const Strategies = (props) => {
    const {strats} = props

    return (
        <div className=''>
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
        </div>
    )
}

export default Strategies
