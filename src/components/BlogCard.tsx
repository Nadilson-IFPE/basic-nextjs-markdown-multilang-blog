import Image from "next/image";

interface BlogCardProps {
    key: number
    cardIndex: number
    cardNumber: string
    author?: string
    author_image?: string
    author_email?: string
    post_image?: string
    post_thumbnail?: string
    post_date: string
    post_title: string
    post_summary: string
    post_video?: string
}

const BlogCard = ({
    cardIndex,
    cardNumber,
    author,
    author_image,
    author_email,
    post_image,
    post_thumbnail,
    post_date,
    post_title,
    post_summary,
    post_video,
}: BlogCardProps) => {
    return (
        <>
            <div className="mt-20 sm:text-xs md:text-sm lg:text-sm xl:text-lg grid grid-rows-3 grid-flow-col lg:gap-36 md:gap-16 sm:gap-8">
                <div className="row-span-3">
                    <div className="flex">
                        <p className="font-bold text-sm leading-5 text-zinc-300">Publicado por:</p>
                        <p className="px-1 font-bold leading-5 text-sm text-zinc-300">Autor</p>
                        <p className="-mt-1 px-1 font-normal leading-5 text-sm text-zinc-300">.</p>
                        <p className="px-1 font-normal leading-5 text-sm text-zinc-300">00/00/0000</p>
                    </div>
                    <div className="flex flex-1 break-words">
                        <div className="block pt-8">
                            <span className="font-bold text-xl text-white">Título</span>
                        </div>
                    </div>
                    <div className="flex flex-1 break-words">
                        <div className="text-xs block pt-4 text-left">
                            <span id="timeToReadText" className="mt-4 text-sm text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque ipsam, tempora hic id odio culpa quia a tenetur, dignissimos sapiente illo. Iusto nostrum veniam, obcaecati earum qui magnam saepe hic!</span>
                        </div>
                    </div>
                    <div className="flex flex-1 break-words">
                        <div className="text-sm block pt-20">
                            <span className="mt-4 text-sm text-white">Tempo estimado de leitura:</span>
                            <span className="mb-6 px-2 mt-4 text-sm text-white">Tempo estimado de leitura</span>
                        </div>
                    </div>
                    <hr className='lines' />
                </div>
            </div>

        </>
    )
};


export default BlogCard;