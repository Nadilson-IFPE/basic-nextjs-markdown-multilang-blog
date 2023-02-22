import Head from 'next/head'
import React from "react";
import Link from 'next/link';
import ThreeDotsDivider from './ThreeDotsDivider';
import LanguageSelector from './LanguageSelector';
import { useLanguages } from '@/hooks/useLanguages';


const NavigationBar = () => {

  const translateString = useLanguages()

  return (
    <>
      <nav className="p-1 pt-5 px-5 fixed z-100 w-screen bg-[#303049]">
        <Link href="/"
          className="sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl text-white font-bold">
          {translateString.website_title}
        </Link>
        <div className="pt-10">
          <div className="fixed flex text-white font-normal gap-2 md:gap-4">
            <Link href="/" className='underline hover:text-yellow-500 underline-offset-[6px] transition-colors duration-300'>{translateString.nav_home}</Link>
            <Link href="/blog" className='underline:none hover:text-yellow-500 hover:underline underline-offset-[6px] transition-colors duration-300'>{translateString.nav_blog}</Link>
            <Link href="/about" className='underline:none hover:text-yellow-500 hover:underline underline-offset-[6px] transition-colors duration-300'>{translateString.nav_about}</Link>
            <ThreeDotsDivider />
            <LanguageSelector />
          </div>
          <hr className='lines' />

        </div>

      </nav>
    </>
  );
};

export default NavigationBar;
