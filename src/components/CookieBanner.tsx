import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

const CookieBanner = () => {
    const [cookie, setCookie] = useCookies(['userHasBeenWarnedAboutCookies'])

    const [cookieExists, setCookieExists] = useState(true)

    useEffect(() => {
        const cookieWasSet = cookie.userHasBeenWarnedAboutCookies === 'true'
        setCookieExists(cookieWasSet)
    }, [])


    const setUserHasBeenWarnedAboutCookies = (userAccepted: boolean) => {
        // Cookie expira em um ano: 31536000 (1 hora = 3600; 1 ano = 3600 * 24 * 365)
        // Navegadores estão exigindo atributos SameSite e Secure para cookies:
        // https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Headers/Set-Cookie/SameSite
        if (!cookieExists) {
            setCookie('userHasBeenWarnedAboutCookies', userAccepted, {
                path: '/',
                maxAge: 31536000,
                sameSite: 'none',
                secure: true,
            })
            setCookieExists(true)
            //  Router.reload()
        }
    }

    if (cookieExists) {
        return null
    }



    return (
        <>
            <div className="modal p-4 bg-[#324376] bottom-0 z-50 left-0 fixed w-screen items-center flex justify-center aria" role="dialog" aria-modal="true" tabIndex={1}>
                <div className="flex-1">
                    <span className="font-extrabold text-2xl text-yellow-400 text-left">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
                </div>

                <div className="flex">
                    <button onClick={() => {
                        setUserHasBeenWarnedAboutCookies(false)
                    }} className="bg-indigo-500 m-5 px-5 py-2 text-white rounded-md hover:bg-indigo-700 focus:outline-none text-base font-medium  focus:ring-1 focus:ring-indigo-200" data-bs-dismiss="modal">
                        Recuso
                    </button>

                    <button onClick={() => {
                        setUserHasBeenWarnedAboutCookies(true)
                    }} className="bg-indigo-500 m-5 px-5 py-2 text-white rounded-md hover:bg-indigo-700 focus:outline-none text-base font-medium  focus:ring-1 focus:ring-indigo-200">
                        Aceito
                    </button>
                </div>
            </div >
        </>
    )
};


export default CookieBanner;