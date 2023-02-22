import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from "next/router"
import { useCookies } from "react-cookie"
import br_flag from '../../public/images/br.svg'
import gb_flag from '../../public/images/gb.svg'


const LanguageSelector = () => {
    const router = useRouter()
    const [cookie, setCookie] = useCookies(['DEFAULT_LOCALE'])
    const [userAcceptedCookieConsentCookie, setUserAcceptedCookieConsentCookie] =
        useCookies(['userHasBeenWarnedAboutCookies'])

    const { locale, asPath } = router

    const changeLocale = () => {
        const lang = router.locale === 'en' ? 'pt' : 'en'
        router.push(router.pathname, asPath, {
            locale: lang,
        })

        // Deixa configurar o cookie para idiomas apenas se
        // o usuário aceitou salvar cookies no banner exibido
        // pelo módulo react-cookie
        if (userAcceptedCookieConsentCookie.userHasBeenWarnedAboutCookies === 'true') {
            setWebSiteLanguageCookie(lang)
        } else {
            //  console.log('Usuário não aceitou CookieConsent!')
        }
    }

    const setWebSiteLanguageCookie = (language: string | undefined) => {
        if (cookie.DEFAULT_LOCALE !== language) {
            // Cookie expira em um ano: 31536000 (1 hora = 3600; 1 ano = 3600 * 24 * 365)
            // Navegadores estão exigindo atributos sameSite e secure para cookies:
            // https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Headers/Set-Cookie/SameSite
            setCookie('DEFAULT_LOCALE', language, {
                path: '/',
                maxAge: 31536000,
                sameSite: 'none',
                secure: true,
            })
        }
    }

    return (
        <button
            type="button"
            className="pt-0 h-6 w-6 rounded px-0"
            onClick={() => {
                changeLocale()
            }}
        >
            <Image
                src={locale === 'en' ? br_flag : gb_flag}
                alt={
                    locale === 'en'
                        ? "Click to change site's language"
                        : 'Clique para mudar o idioma do site'
                }
                height={30}
                width={30}
            />
        </button>
    )
}

export default LanguageSelector