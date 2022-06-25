import React, { Fragment } from "react"
import { useParams, Route } from "react-router-dom"
import Comments from "../components/comments/Comments"

const QuoteDetails = () => {
  const params = useParams();
  return (
    <Fragment>
      <h1>QuoteDetail</h1>
      <p>{params.quoteId}</p>
      <Route>
        <Comments />
      </Route>
    </Fragment>
  )
}

export default QuoteDetails
