import Image from "next/image";
import React from "react";
import nextjs from "../../public/images/nextjs.png"
import Link from 'next/link';
import { useLanguages } from "@/hooks/useLanguages";

const HomePage = () => {

    const translateString = useLanguages()

    return (
        <>
            <div className="flex-shrink mx-auto p-5 md:text-xl lg:text-2xl text-justify text-white">
                <div className="flex flex-wrap justify-center">
                    <Image src={nextjs} alt="Next.js" className="shadow-lg rounded-full max-w-full h-auto align-middle border-none" height={200} width={200} />
                </div>
                <div className="flex flex-wrap justify-center">
                    <h1 className="pt-5 pb-10 text-white text-2xl font-bold underline decoration-sky-300 decoration-wavy underline-offset-8 dark:text-white lg:text-3xl">
                        {translateString.home_page_title}
                    </h1>
                </div>
                <p className="mb-6">
                    {translateString.home_page_p1}
                </p>
                <p className="mb-6">
                    {translateString.home_page_p2}
                </p>
                <p className="text-center font-bold">{translateString.home_page_p3}</p>
                <br />
                <p className="mb-6" dangerouslySetInnerHTML={{ __html: translateString.home_page_p4 }} />

                <Link
                    className="text-blue-500 font-medium tracking-wider transition-colors hover:text-yellow-500 dark:text-white"
                    href="https://coodesh.com/blog/dicionario/o-que-e-next-js/"
                    passHref
                    target="_blank"
                    rel="noreferrer"
                >
                    https://coodesh.com/blog/dicionario/o-que-e-next-js/
                </Link>

            </div>
        </>
    )
};


export default HomePage;