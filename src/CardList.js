import React from 'react'
import Card from './Card'

export default function CardList({robots}) {
    const cardArray = robots.map((user) => {
        return <Card key = {user.id} id = {user.id} name= {user.name} mail = {user.email} />
    })
  return (
    <div>
      {cardArray}
    </div>
  )
}
