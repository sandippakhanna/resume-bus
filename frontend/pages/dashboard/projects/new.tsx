import { NextPage } from "next"
import React from "react"
import Layout from "../../../components/dashboard/layout"
import NewProjectSection from "../../../components/dashboard/sections/project/new-project"

const NewProject: NextPage = () => {
  return (
    <Layout currentMenu="New Project">
      <NewProjectSection />
    </Layout>
  )
}

export default NewProject
