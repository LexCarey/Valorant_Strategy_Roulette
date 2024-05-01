import React, { useEffect, useState } from 'react'
import './Strategies.css'
import axios from 'axios'


const Strategies = () => {
    const [Strategies, setStrategies] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/agent-strategies/Astra Viper/Lotus')
        .then(res => setStrategies(res.data))
        .catch(err => console.log(err))
    }, [])



    return (
        <div className=''>
            {
                Strategies.map((entry, i) =>
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