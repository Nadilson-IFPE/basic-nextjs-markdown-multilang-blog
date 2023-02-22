import { useLanguages } from "@/hooks/useLanguages"

const Head = () => {

    const translateString = useLanguages()

    return (
        <>
            <title>{translateString.website_title}</title>
            <meta name="description" content={translateString.website_description} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
            <link rel="icon" href="/favicon.ico" />
        </>
    )
}

export default Head