import Post from "@/models/post"
import { GetStaticPropsContext, NextPage } from "next"
import fs from 'fs'
import path from 'path'
import matter from "gray-matter"


type BlogProps = {
    posts: Array<Post>
}

const sortByDate = (
    a: { frontmatter: { data: string | number | Date } },
    b: { frontmatter: { data: string | number | Date } }
) => {
    var data1 = new Date(a.frontmatter.data).toLocaleDateString('pt-BR')
    var data2 = new Date(b.frontmatter.data).toLocaleDateString('pt-BR')
    if (data1 < data2) {
        return 1
    } else if (data1 > data2) {
        return -1
    } else {
        return 0
    }
}

function precedaComZero(numero: number) {
    return (numero < 10 ? '0' : '') + numero
}

const Blog: NextPage<BlogProps> = ({ posts }: BlogProps) => {
    return (
        <>
            <h1 className="text-white">BLOG</h1>
            <h2 className="text-white">Aqui, serão listadas todas as postagens com data começando da mais nova para a mais antiga.</h2>

            {posts.map((post, idx) => {
                return (
                    console.log(
                        'Key: ' + Math.random(),
                        '\nIndex: ' + idx,
                        '\nNúmero que aparecerá no card: ' + precedaComZero(posts.length - idx),
                        '\nURL da imagem: ' + post.frontmatter.post_image,
                        '\nURL da miniatura da imagem: ' + post.frontmatter.post_thumbnail,
                        '\nData da postagem: ' + post.frontmatter.post_date,
                        '\nAutor: ' + post.frontmatter.author,
                        '\nImagem do autor: ' + post.frontmatter.author_image,
                        '\nE-mail do autor: ' + post.frontmatter.author_email,
                        '\nTítulo da postagem: ' + post.frontmatter.post_title,
                        '\nResumo da postagem: ' + post.frontmatter.post_summary,
                        '\nVídeo da postagem: ' + post.frontmatter.post_video
                    )
                )
            })}
        </>
    )
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    // Obtém os arquivos do diretório "posts"
    const files = fs.readdirSync(path.join('src/posts'))

    // Obtém o slug (título/nome do arquivo ".md") e o 
    // frontmatter (assunto ou conteúdo dos arquivos ".md" para transformar em
    // em texto humanamente legível no formato HTML) do diretório "posts".
    // O arquivo será carregado conforme o idioma ativo.
    const postsData = files.map((fileName) => {
        const markdownWithMeta = fs.readFileSync(
            path.join('src/posts/' + fileName + `/${locale}.md`),
            'utf-8'
        )

        const { data: frontmatter, content } = matter(markdownWithMeta)

        return {
            slug: fileName,
            frontmatter,
            content,
        }
    })

    const posts = JSON.parse(JSON.stringify(postsData))

    return {
        props: {
            posts: posts.sort(
                (
                    post1: { frontmatter: { data: string | number | Date } },
                    post2: { frontmatter: { data: string | number | Date } }
                ) =>
                    new Date(post1.frontmatter.data).toLocaleDateString('pt-BR') >
                        new Date(post2.frontmatter.data).toLocaleDateString('pt-BR')
                        ? -1
                        : 1
            ),
        },
    }
}

export default Blog