import Image from "next/image";
import Link from "next/link";
import React from "react";
import me from "../../public/images/me.png"
import github from '../../public/images/github.png'
import whatsapp from '../../public/images/whatsapp.png'
import { useLanguages } from "@/hooks/useLanguages";

const AboutPage = () => {

    const translateString = useLanguages()

    return (
        <>
            <div className="flex-shrink mx-auto p-5 md:text-xl lg:text-2xl text-justify text-white">
                <div className="flex flex-wrap justify-center">
                    <Image src={me} alt="Nadilson" className="shadow-lg rounded-full max-w-full h-auto align-middle border-none" height={200} width={200} />
                </div>
                <div className="flex flex-wrap justify-center">
                    <h1 className="pt-5 pb-10 text-white text-2xl font-bold underline decoration-sky-300 decoration-wavy underline-offset-8 dark:text-white lg:text-3xl">
                        {translateString.about_page_greeting}
                    </h1>
                </div>
                <p className="mb-6">
                    {translateString.about_page_text}
                </p>

                <div className="mt-1 flex justify-center">
                    <p className="text-white">{translateString.about_page_find_me_at}</p>
                    <Link
                        href="https://github.com/Nadilson-IFPE"
                        className="px-3 font-medium tracking-wider transition-colors hover:text-yellow-500 dark:text-white"
                        target="_blank"
                        rel="noreferrer"
                        passHref>
                        <Image
                            src={github}
                            alt="Github de Nadilson José Rodrigues Teixeira"
                            priority={true}
                            className="transform transition duration-500 hover:scale-105"
                            width={30}
                            height={30}
                        />
                    </Link>

                    <Link
                        href="https://wa.me/+5581986723962"
                        className="font-medium tracking-wider transition-colors hover:text-yellow-500 dark:text-white"
                        target="_blank"
                        rel="noreferrer"
                        passHref>
                        <Image
                            src={whatsapp}
                            alt="WhatsApp de Nadilson José Rodrigues Teixeira"
                            priority={true}
                            className="transform transition duration-500 hover:scale-105"
                            width={30}
                            height={30}
                        />
                    </Link>
                </div>
            </div>
        </>
    )
};


export default AboutPage;