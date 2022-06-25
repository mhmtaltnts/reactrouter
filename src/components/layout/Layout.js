import React, { Fragment } from "react"
import MainNavigation from "./MainNavigation"
import classes from "./MainNavigation.module.css"

const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  )
}

export default Layout
