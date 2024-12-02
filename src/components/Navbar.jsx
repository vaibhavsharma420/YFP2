import React from 'react'
import { navLists } from '../constants';
import { searchImg } from '../utils';

const Navbar = () => {
  return (
    <header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center'>
        <nav className='flex w-full screen-max-width'>
            <img src="./images/LogoImg.png" width={100} height={20}/>
            <div className='flex flex-1 justify-center max-sm:hidden'>
                {navLists.map((nav)=>(
                <div key={nav} className='px-5 py-12 text-sm cursor-pointer text-gray hover:text-white transition-all'>
                    {nav}
                </div>
            )
            )}
            </div>
            <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
              <img src={searchImg} width={18} height={18} className='py-12'/>
            </div>
        </nav>
    </header>
  )
}

export default Navbar;
