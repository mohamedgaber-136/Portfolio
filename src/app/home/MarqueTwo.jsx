import React from 'react'
import Marquee from 'react-fast-marquee'
import novartisImg from '../../../public/images/Clients/Novartis.png'
import mavistay from '../../../public/images/Clients/mavistay.png'
import tawreed from '../../../public/images/Clients/tawreed.png'
import omdr from '../../../public/images/Clients/omdr.png'
import kayan from '../../../public/images/Clients/kayan.png'
import Image from 'next/image'
export const MarqueTwo = () => {
  return (
    <div className='overflow-y-hidden MarqueParentTwo'>
        <Marquee className='  ' pauseOnHover	play speed={150} direction="right">

<Image src={novartisImg} alt="NovartisClient" />
<Image src={mavistay} alt="mavistayClient" />
<Image src={tawreed} alt="tawreedClient" />
<Image src={omdr} alt="omdrClient" />
<Image src={kayan} alt="kayanClient" />

        </Marquee>
    </div>  )
}
