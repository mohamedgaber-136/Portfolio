import React from 'react'
import Marquee from 'react-fast-marquee'

export const MarqueOne = () => {
  return (
    <div className='overflow-y-hidden MarqueParent'>
        <Marquee className='h-[150px]  ' pauseOnHover	play speed={100}>
<h1 className='text-[100px] marqueText  '>
    Frontend Developer 
</h1>
<h1 className='text-[100px]  marqueText '>
    Reactjs
</h1>
<h1 className='text-[100px]  marqueText '>
    Nextjs
</h1>
<h1 className='text-[100px]  marqueText '>
    Wordpress
</h1>
<h1 className='text-[100px] marqueText  '>
Woocommerce
</h1>
        </Marquee>
    </div>  )
}
