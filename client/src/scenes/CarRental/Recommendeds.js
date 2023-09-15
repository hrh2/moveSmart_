import React from 'react'
import RecommendCarCard from './RecommendCard'

// data
import recommendCarsData from "../../data/recommendCars"

export default function Recommendeds() {
  return (
    <div className="flex flex-row  gap-3 overflow-x-scroll p-2 w-full">
          {recommendCarsData.map((item) => (
            <RecommendCarCard item={item} key={item.id} />
          ))}
    </div>
  )
}
