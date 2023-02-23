import { useLanguages } from "@/hooks/useLanguages"
import Link from "next/link"
import { useState, useRef } from "react"
import home_icon from '../../public/images/home.svg'
import blog_icon from '../../public/images/blog.svg'
import about_icon from '../../public/images/about.svg'
import Image from 'next/image'
import LanguageSelector from "./LanguageSelector"


const MobileNavigationBar = () => {
    const [showSidebarMenu, setShowSidebarMenu] = useState(false)

    const myRef = useRef() as React.MutableRefObject<HTMLDivElement>
    //  UseOnClickOutside(myRef, () => setShowSidebarMenu(false))

    const t = useLanguages()

    function handleClick() {
        setShowSidebarMenu(!showSidebarMenu)
    }


    return (
        <>
            {/* Botão hamburguer para o menu para dispositivos móveis */}
            <div className="relative top-0 left-0 p-4 md:hidden lg:hidden xl:hidden 2xl:hidden z-50">
                <button className="mobile-menu-button block text-blue-200 hover:text-[#7d8ac0]" onClick={handleClick}>
                    <svg
                        className="h-6 w-6 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        {showSidebarMenu && (
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                            />
                        )}
                        {!showSidebarMenu && (
                            <path
                                fillRule="evenodd"
                                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                            />
                        )}
                    </svg>
                </button>

            </div>
            <div className="absolute right-2 top-0 p-4 md:hidden lg:hidden xl:hidden 2xl:hidden z-50">
                <LanguageSelector />
            </div>



            {/* Menu para dispositivos móveis */}
            <div
                className={`mobile-menu text-blue-200 bg-[#303049] fixed top-0 left-0 bottom-0 z-50 flex w-4/6 max-w-sm transform flex-col content-start overflow-y-auto border-r px-6 py-6 text-center transition duration-500 ease-in-out sm:text-left md:hidden lg:hidden xl:hidden 2xl:hidden ${
                    // showSidebarMenu ? 'block' : 'hidden'
                    // Suavização na abertura do menu mobile
                    showSidebarMenu
                        ? '.1s block transition-transform ease-in-out md:-translate-x-0'
                        : '-translate-x-full'
                    }`}
            >
                <div className="right-0 top-0">
                    <button className="float-right py-0">
                        <svg
                            className="h-8 w-8 cursor-pointer text-[#616c99] hover:text-[#7d8ac0]"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            onClick={() => setShowSidebarMenu(false)}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>



                <p className="mt-20 font-bold text-base uppercase">
                    {t.website_title}
                </p>

                <div className="m-auto content-start items-start justify-start">
                    <ul>
                        <li className="flex items-center gap-x-2 p-5">
                            <Image
                                className="h-7 w-7 object-cover"
                                src={home_icon}
                                height="30"
                                width="30"
                                alt={""} />
                            <Link href="/" passHref scroll={false} onClick={() => setShowSidebarMenu(false)}>
                                <strong>{t.nav_home}</strong>
                            </Link>
                        </li>


                        <li className="flex items-center gap-x-2 p-5">
                            <Image
                                className="h-7 w-7 object-cover"
                                src={blog_icon}
                                height="30"
                                width="30"
                                alt={""}
                            />
                            <Link href="/blog" passHref onClick={() => setShowSidebarMenu(false)}>
                                <strong>{t.nav_blog}</strong>
                            </Link>
                        </li>

                        <li className="flex items-center gap-x-2 p-5">
                            <Image
                                className="h-7 w-7 object-cover"
                                src={about_icon}
                                height="30"
                                width="30"
                                alt={""}
                            />
                            <Link href="/about" passHref onClick={() => setShowSidebarMenu(false)}>
                                <strong>{t.nav_about}</strong>
                            </Link>
                        </li>
                    </ul>
                </div>

                <p className="mt-auto text-xs text-gray-400">
                    <span>
                        &copy; {new Date().getFullYear()} - Nadilson J. R. Teixeira
                    </span>
                </p>
            </div>
        </>
    )
}

export default MobileNavigationBar