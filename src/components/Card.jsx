import React, { useState } from 'react'
import axios from 'axios'

export const Card = ({ name, url }) => {
    
    const [imageURL, setImageURL] = useState('')
    const [type, setType] = useState([])

    axios.get(url).then((response) => {
        setImageURL(response.data.sprites.other.dream_world.front_default)
        setType(response.data.types)
    })

    return (
        <div className='pokemon-card'>
            <div className='pokemon-name'>
                {name.toUpperCase()}
            </div>
            <div className='pokemon-image'>
                <img src={imageURL} />
            </div>
            <div className='pokemon-type'>
                {type.map((t, index) => {
                    return <div className={t.type.name + " type-general"}  key={index}>{t.type.name} </div>
                })}
            </div>
        </div>
    )
}

