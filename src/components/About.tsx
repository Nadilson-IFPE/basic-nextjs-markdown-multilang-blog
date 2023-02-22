import Image from "next/image";
import Link from "next/link";
import React from "react";
import me from "../../public/images/me.png"
import github from '../../public/images/github.png'
import whatsapp from '../../public/images/whatsapp.png'

const AboutPage = () => {
    return (
        <>
            <div className="flex-shrink mx-auto p-5 md:text-xl lg:text-2xl text-justify text-white">
                <div className="flex flex-wrap justify-center">
                    <Image src={me} alt="Nadilson" className="shadow-lg rounded-full max-w-full h-auto align-middle border-none" height={200} width={200} />
                </div>
                <div className="flex flex-wrap justify-center">
                    <h1 className="pt-5 pb-10 text-white text-2xl font-bold underline decoration-sky-300 decoration-wavy underline-offset-8 dark:text-white lg:text-3xl">
                        Olá.
                    </h1>
                </div>
                <p className="mb-6">
                    Meu nome é Nadilson. Sou desenvolvedor de software e, também, Historiador. No momento,
                    além de estar procurando emprego novo, tenho investido meu tempo livre para "brincar"
                    com várias tecnologias e frameworks, mas sem deixar de ler meus livros e artigos
                    relacionados às duas áreas a que pertenço. Também sou chegado em tocar guitarra. Tanto
                    que tenho três, cada uma com uma afinação diferente para tocar Metal Extremo (Drop C,
                    Drop D e Drop C#), uma desculpa que usei para torrar dinheiro com guitarras.
                </p>

                <div className="mt-1 flex justify-center">
                    <div className="flex space-x-4 font-medium text-gray-800 dark:text-white sm:block md:flex lg:flex"></div>
                    <p className="text-white">Encontre-me em:</p>
                    <Link
                        href="https://github.com/Nadilson-IFPE"
                        className="px-3 font-medium uppercase tracking-wider transition-colors hover:text-yellow-500 dark:text-white"
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
                            placeholder="blur"
                        />
                    </Link>

                    <Link
                        href="https://wa.me/+5581986723962"
                        className="font-medium uppercase tracking-wider transition-colors hover:text-yellow-500 dark:text-white"
                        target="_blank"
                        rel="noreferrer"
                        passHref>
                        <Image
                            src={whatsapp}
                            alt="WhatsApp de Nadilson José Rodrigues Teixeira"
                            priority={true}
                            className={
                                'transform transition duration-500 hover:scale-105'
                            }
                            width={30}
                            height={30}
                            placeholder="blur"
                        />
                    </Link>
                </div>
            </div>
        </>
    )
};


export default AboutPage;