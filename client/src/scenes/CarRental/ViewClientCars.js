import React from 'react'
import CarCard from './ClientCarsCard'

// data
import recommendCarsData from "../../data/recommendCars"

export default function Recommendeds() {
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 p-4">
          {recommendCarsData.map((item) => (
            <CarCard item={item} key={item.id} />
          ))}
    </div>
  )
}
