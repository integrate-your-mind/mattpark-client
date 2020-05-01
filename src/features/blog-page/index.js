import React from 'react'
import {
  makeStyles,
  Typography,
} from '@material-ui/core'

import Layout from '../../layout'
import SEO from "../../layout/seo"

const useStyles = makeStyles((theme) => ({
  root: {
  },
  container: {
  },
}))


const BlogPage = ({ data, location }) => {
  const classes = useStyles()
  return (
    <Layout className={classes.root} location={location}>
      <SEO pageTitle="Blog" />
      <div className={classes.container}>
        <Typography variant="h1">My Blog</Typography>
        <Typography variant="h4">
          Under construction..
        </Typography>
      </div>
    </Layout>
  )
}

export default BlogPage