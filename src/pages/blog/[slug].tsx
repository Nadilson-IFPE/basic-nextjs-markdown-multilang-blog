import Head from 'next/head'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Post from '../../models/post'
import Link from 'next/link'
import { NextPage } from 'next'
import { useLanguages } from '../../hooks/useLanguages'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { marked } from 'marked'

type GetStaticPathsContext = {
    locale?: string
    locales?: string[]
    defaultLocale?: string
}

const PostPage: NextPage<Post> = ({
    frontmatter: {
        author,
        author_image,
        author_email,
        post_image,
        post_thumbnail,
        post_date,
        post_title,
        post_summary,
        post_video,
    },
    slug,
    content,
}: Post) => {
    const t = useLanguages()
    const { locale } = useRouter()

    return post_title !== '' ? (
        <>
            <div className="mx-auto justify-center space-y-14 px-4 pt-5 lg:space-y-24">



                <article className="bg-[#6a6a80] text-white shadow-[0 4px 8px 0 rgba(161, 193, 240, 0.2)] prose mx-auto mt-8 rounded-xl shadow-lg shadow-indigo-500/50 md:prose-lg lg:prose-xl">
                    <div className="shadow-indigo-500/50">
                        <Link href="/blog" className='no-underline font-bold hover:text-yellow-300'>
                            {t.slug_go_back_button}
                        </Link>
                    </div>

                    <h1 className="text-yellow-300 p-4 pt-6 text-center text-2xl font-bold tracking-tight">
                        {post_title}
                    </h1>
                    <div className="flex aspect-auto items-center justify-center content-center">
                        <Image
                            className="mt-2 mb-2 aspect-auto h-auto max-w-full lg:mb-2"
                            src={`${post_image}`}
                            alt={post_title}
                            height={150}
                            width={150}

                        />
                    </div>
                    <div className="pt-2 bg-[#6a6a80] px-4 text-yellow-300 text-[14px]">
                        <div>
                            <strong className='text-yellow-300'>{t.slug_post_date}</strong>
                            {post_date}
                        </div>
                        <div>
                            <strong className='text-yellow-300'>{t.slug_post_author}</strong>
                            {author}
                        </div>
                    </div>

                    <div className="text-white h-auto max-w-full rounded-xl p-4 text-justify">
                        <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
                    </div>
                </article>
            </div>
        </>
    ) : (
        <>

            {locale === 'en' && (
                <>
                    <h1>Sorry!</h1>
                    <p>Sorry, this entry is not available yet in English.</p>
                </>
            )}
        </>
    )
}

export default PostPage

export async function getStaticPaths({ locales }: GetStaticPathsContext) {
    const files = fs.readdirSync(path.join('src/posts'))

    const pathsArray: { params: { slug: string }; locale: string }[] = []
    files.map((dirname) => {
        locales?.map((language: string) => {
            pathsArray.push({ params: { slug: dirname }, locale: language })
        })
    })

    return {
        paths: pathsArray,
        fallback: false,
    }
}

export async function getStaticProps({
    locale,
    params: { slug },
}: {
    locale: string
    params: { slug: string }
}) {
    const markeddownWithMeta = fs.readFileSync(
        path.join('src/posts/' + slug + `/${locale}.md`),
        'utf-8'
    )

    const { data: frontmatter, content } = matter(markeddownWithMeta)

    return {
        props: {
            frontmatter: JSON.parse(JSON.stringify(frontmatter)),
            slug,
            content,
        },
    }
}
