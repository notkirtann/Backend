// import React from 'react'
import type { Player } from '../types/types.ts'
import PlayerCard from './PlayerCard.tsx'

interface PlayerListProps{
    data:Player[]
}

function PlayerList({data}:PlayerListProps) {
  return (
    <div>
      {data.map((p)=>(
        <PlayerCard
        key={p.id} 
        name={p.name}
        jersey={p.jersey}
        injured={p.injured}
        />
      ))}
    </div>
  )
}

export default PlayerList
