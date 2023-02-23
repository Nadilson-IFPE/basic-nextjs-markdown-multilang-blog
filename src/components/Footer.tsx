const Footer = () => {
    return (
        <div className="bg-[#303049] bottom-0 w-screen fixed text-center text-gray-600 select-none">
            <div className="text-center p-6">
                <span className="sm:text-xs md:text-sm lg:text-sm xl:text-sm"> &copy; {new Date().getFullYear()} - Nadilson José Rodrigues Teixeira</span>
            </div>
        </div>
    )
};


export default Footer;