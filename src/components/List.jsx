import React, { useEffect, useState } from 'react'
import { Card } from './Card'

export const List = ({ pokemon }) => {
    return (
        <div className='wrapper'>
                {pokemon.map((poke, index) => {
                    return (
                        <Card key={index} name={poke.name} url={poke.url} />
                    )
            })}
        </div>
    )
}