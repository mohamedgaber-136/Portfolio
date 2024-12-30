
import BlobCursor from '@/Components/BlobCursor';
import { BlurText } from '@/Components/blurText';
import { SplitText } from '@/Components/SplitText';
import Link from 'next/link';

export default function MainPage() {
  return (
    <div className='flex container HomeIntro gap-4 flex-col items-center justify-start'>
    
    <BlurText text="Welcome To My Website"  delay={500}/>
    <SplitText text="Hi there! I'm Mohamed Gaber, a frontend developer who turns caffeine into code and pixels into perfection! "  delay={100} />
    <BlobCursor/>
  <Link href='/home' className='p-2 bg-background-dark test-btn text-white rounded-md border-2 border-solid'>Home</Link>
    </div>
  );
}
