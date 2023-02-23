import { useLanguages } from "@/hooks/useLanguages"


const Head = () => {

    const translateString = useLanguages()

    return (
        <>
            <title>{translateString.website_title}</title>
            <meta name="description" content={translateString.website_description} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        </>
    )
}

export default Head