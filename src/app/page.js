import Spline from '@splinetool/react-spline/next';
import Link from 'next/link';

export default function mainPage() {
  return (
    <main>
      <Spline
        scene="https://prod.spline.design/2LBMtCA56PeK6vu0/scene.splinecode" 
      />
      <button className='btnTest'>
        
      </button>
        <Link href='/home' className='btnTestTwo'></Link>
    </main>
  );
}
