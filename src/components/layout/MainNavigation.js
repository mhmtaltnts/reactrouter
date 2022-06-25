import React from "react"
import { NavLink } from "react-router-dom"
import classes from "./MainNavigation.module.css"

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Great Logo</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/quotes" activeClassName={classes.active}>
              All Quotes
            </NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to="/new-quote" activeClassName={classes.active}>
              New Quote
            </NavLink>
          </li>
          <li>
            <NavLink to="/quotes/:quotesId" activeClassName={classes.active}>
              Quote Detail
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation
