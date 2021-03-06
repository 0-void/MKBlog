import Post from '@/components/post'
import getPosts from '@/lib/get-posts'
import renderMarkdown from '@/lib/render-markdown'

const PostPage = (props) => {
  return <Post {...props} path="/vim/"/>
}

export const getStaticProps = ({ params: { slug } }) => {
  const posts = getPosts('vim')
  const postIndex = posts.findIndex((p) => p.slug === slug)
  const post = posts[postIndex]
  const { body, ...rest } = post

  return {
    props: {
      previous: posts[postIndex - 1] || null,
      next: posts[postIndex + 1] || null,
      ...rest,
      html: renderMarkdown(body),
    },
  }
}

export const getStaticPaths = () => {
  return {
    paths: getPosts('vim').map((p) => `/vim/${p.slug}`),
    fallback: false,
  }
}

export default PostPage
