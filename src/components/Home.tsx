import Image from "next/image";
import React from "react";
import nextjs from "../../public/images/nextjs.png"
import Link from 'next/link';

const HomePage = () => {
    return (
        <>
            <div className="flex-shrink mx-auto p-5 md:text-xl lg:text-2xl text-justify text-white">
                <div className="flex flex-wrap justify-center">
                    <Image src={nextjs} alt="Next.js" className="shadow-lg rounded-full max-w-full h-auto align-middle border-none" height={200} width={200} />
                </div>
                <div className="flex flex-wrap justify-center">
                    <h1 className="pt-5 pb-10 text-white text-2xl font-bold underline decoration-sky-300 decoration-wavy underline-offset-8 dark:text-white lg:text-3xl">
                        Sobre o Next.js
                    </h1>
                </div>
                <p className="mb-6">
                    Next.js é um framework React criado em 2016 pela Vercel e sob a licença MIT. Hoje, ele está
                    disponível em código aberto e pode contribuir para a criação de interfaces do usuário junto com React.
                </p>
                <p className="mb-6">
                    O interessante é que Next.js permite o desenvolvimento de aplicações no lado usuário e no lado servidor.
                </p>
                <p className="mb-6">
                    <p className="text-center font-bold">Características de Next.js</p>
                    <br />

                    Entre as várias características de Next.js, as quais o diferenciam de
                    outros frameworks da família JavaScript, estão:
                    <br /> <br />
                    Renderização estática e pelo lado do servidor;
                    <br />
                    Suporte também ao TypeScript;
                    <br />
                    Serviço de tratamento de rotas;
                    <br />
                    Melhora a performance de React;
                    <br />
                    Apresenta boa indexação de conteúdo, favorecendo o SEO;
                    <br />
                    Entrega a página pronta para o browser (classificando-o como Server-Side-Rendering);
                    <br />
                    Permite a instalação de plugins;
                    <br />
                    Permite apenas o carregamento necessário, pois separa o código;
                    <br />
                    Possui fast refresh, ou seja, não precisa recarregar o navegador para atualizar os elementos da página.
                    <br /> <br />
                    Fonte: {' '}
                    <Link
                        className="font-medium tracking-wider transition-colors hover:text-yellow-500 dark:text-white"
                        href="https://coodesh.com/blog/dicionario/o-que-e-next-js/"
                        passHref
                        target="_blank"
                        rel="noreferrer"
                    >
                        https://coodesh.com/blog/dicionario/o-que-e-next-js/
                    </Link>
                </p>

            </div>
        </>
    )
};


export default HomePage;