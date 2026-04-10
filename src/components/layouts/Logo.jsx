import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
      return (
            <Link className='flex items-center gap-1' href="/">
                 <Image alt='logo' src={"/assets/hero.png"} width={50} height={40}>
                 </Image>
                 <h2 className='text-xl font-bold'>Hero <span className='text-primary'>KidZ</span> </h2>
            </Link>
      );
};

export default Logo;