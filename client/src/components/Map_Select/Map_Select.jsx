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
        <div className=''>
            
            {
                Maps != "" ?
                    Maps.map((entry, i) =>
                        <tr key={i} style={{color: "white", fontFamily: "valorant"}}>
                            {entry.displayName}
                            <img style={{height: "200px"}} src={entry.listViewIcon} alt={entry.displayName} />
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

export default Map_Select