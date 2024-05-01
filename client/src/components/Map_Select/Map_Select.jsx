import React, { useEffect, useState } from 'react'
import './Map_Select.css'
import axios from 'axios'


const Map_Select = () => {
    const [Maps, setMaps] = useState([])

    useEffect(()=>{
        axios.get('https://valorant-api.com/v1/maps')
        .then(res => setMaps(res.data.data))
        .catch(err => console.log(err))
    }, [])

    return (
        <div style={{width: "100%"}}>
            
            {
                Maps != "" ?
                    Maps.map((entry, i) =>
                        <div className='mapContainer' key={i} style={{color: "white", fontFamily: "valorant", width: "100%"}}>
                            <img style={{width: "100%"}} src={entry.listViewIcon} alt={entry.displayName} />
                            <h1 className='mapText'>{entry.displayName}</h1>
                            <br/>
                            <br/>
                        </div>
                    )
                :
                <h1>Loading...</h1>
            }
        </div>
    )
}

export default Map_Select