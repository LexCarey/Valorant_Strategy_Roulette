import React, { useEffect, useState } from 'react'
import './Map_Select.css'
import axios from 'axios'


const Map_Select = (props) => {
    const {maps} = props

    return (
        <div style={{width: "100%"}}>
            
            {
                maps.map((entry, i) =>
                    <div className='mapContainer' key={i} style={{color: "white", fontFamily: "valorant", width: "100%"}}>
                        <img style={{width: "100%"}} src={entry.listViewIcon} alt={entry.displayName} />
                        <h1 className='mapText'>{entry.displayName}</h1>
                        <br/>
                        <br/>
                    </div>
                )
            }
        </div>
    )
}

export default Map_Select