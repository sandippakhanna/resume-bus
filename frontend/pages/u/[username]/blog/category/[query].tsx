import React from "react"
import Layout from "../../../../../components/profile/Layout"
import SearchBlogSection from "../../../../../components/profile/sections/blog/SearchBlogSection"
import {
  BlogSearchSectionProps,
  LayoutProps,
} from "../../../../../types/profile"
import Error from "../../../../error"

interface BlogPageProps {
  success: boolean
  display_blog: boolean
  layout: LayoutProps
  section: BlogSearchSectionProps
}

const BlogCategory: React.FC<BlogPageProps> = (props: BlogPageProps) => {
  return (
    <>
      {props.display_blog === true && props.success ? (
        <Layout layoutProps={props.layout}>
          <SearchBlogSection {...props.section} />
        </Layout>
      ) : (
        <Error />
      )}
    </>
  )
}

interface ContextProps {
  params: {
    username: string
    query: string
  }
}

export const getServerSideProps = async (context: ContextProps) => {
  const username = context.params.username
  const query = context.params.query
  // Fetch data from API
  const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/profile/${username}/blog/category/${query}`

  const res = await fetch(url)
  const data = await res.json()

  return {
    props: { ...data.data, success: data.success },
  }
}

export default BlogCategory
