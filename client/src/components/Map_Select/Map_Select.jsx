import React, { useEffect, useState } from 'react'
import './Map_Select.css'
import axios from 'axios'


const Map_Select = (props) => {
    const {maps} = props
    const [mapMenu, setmapMenu] = useState(false)
    const [selectedmap, setSelectedmap] = useState(false)

    let mapMenuTrue = () => {
        setmapMenu(!mapMenu)
    }

    let mapSelect = (map = []) => {
        setmapMenu(!mapMenu)
        setSelectedmap(map)
    }

    return (
        <div style={{width: "100%"}}>

            <div className='map-choice' onClick={mapMenuTrue}>
                {
                    selectedmap ?
                    <div className='mapContainer' style={{color: "white", fontFamily: "valorant", width: "100%"}}>
                        <img className='map-image-cover' style={{width: "100%"}} src={selectedmap.splash} alt={selectedmap.displayName} />
                        <h2 className='mapText'>{selectedmap.displayName}</h2>
                    </div>
                    :
                    <h1 className='plus'>+</h1>
                }
            </div>
            { mapMenu &&
            <div className='mini-maps'>
                {
                maps.map((entry, i) =>
                    <div className='mapContainer one-map' key={i} style={{color: "white", fontFamily: "valorant", width: "100%"}} onClick={(e) => mapSelect(entry)}>
                        <img style={{width: "100%"}} src={entry.splash} alt={entry.displayName} />
                        <h1 className='mapText'>{entry.displayName}</h1>
                    </div>
                )
                }
            </div>
            }
        </div>
    )
}

export default Map_Select