import React from 'react'
import { MarqueOne } from './MarqueOne'
import { MarqueTwo } from './MarqueTwo'

export const HeroSection = () => {
  return (
    <div className="grandParentMarque">
        <div className="secondParent"></div>
   <MarqueOne/>
   {/* <MarqueTwo/> */}
    </div>
  )
}
