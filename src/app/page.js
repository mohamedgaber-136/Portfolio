import Spline from '@splinetool/react-spline/next';
import Head from 'next/head';
import Link from 'next/link';

export default function mainPage() {
  return (
    <>
        <Head>
        <link rel="preload" href="https://prod.spline.design/2LBMtCA56PeK6vu0/scene.splinecode" as="fetch" crossOrigin="anonymous" />
      </Head>
    <main>
      <Spline
        scene="https://prod.spline.design/2LBMtCA56PeK6vu0/scene.splinecode" 
      />
      <button className='btnTest'>
        
      </button>
        <Link href='/home' className='btnTestTwo'></Link>
    </main>
    </>
  );
}
