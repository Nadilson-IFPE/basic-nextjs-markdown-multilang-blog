import { useLanguages } from "@/hooks/useLanguages";
import Image from "next/image";
import Link from "next/link";

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
    post_link: string,
    post_reading_time?: string;
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
    post_link,
    post_reading_time
}: BlogCardProps) => {

    const translateString = useLanguages()

    return (
        <>
            <Link href={post_link} passHref>
                <article
                    id={`${'BlogCard_'}${cardNumber}`}
                    key={cardIndex}
                    className="bg-[#303049] pt-5 p-10 pb-2 sm:text-xs md:text-sm lg:text-sm xl:text-lg hover:bg-[#393957]">
                    <div className="row-span-3">
                        <div className="flex">
                            <p className="font-bold text-sm leading-5 text-zinc-300">{translateString.posts_publisher}</p>
                            <p className="px-1 font-bold leading-5 text-sm text-zinc-300">{author}</p>
                            <p className="-mt-1 px-1 font-normal leading-5 text-sm text-zinc-300">.</p>
                            <p className="px-1 font-normal leading-5 text-sm text-zinc-300">{post_date}</p>
                        </div>
                        <div className="flex flex-1 break-words">
                            <div className="block pt-4">
                                <span className="font-bold text-xl text-white">{post_title}</span>
                            </div>
                        </div>
                        <div className="flex flex-1 break-words">
                            <div className="text-xs block pt-4 text-left">
                                <span id="timeToReadText" className="mt-4 text-sm text-white">{post_summary}</span>
                            </div>
                        </div>
                        <div className="flex flex-1 break-words">
                            <div className="text-sm block pt-10">
                                <span className="mt-2 text-sm text-white">{translateString.posts_reading_time}{post_reading_time}</span>
                            </div>
                        </div>

                    </div>
                    <hr className='lines' />
                </article>
            </Link>
        </>
    )
};


export default BlogCard;