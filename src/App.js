import { Redirect, Route, Switch } from "react-router-dom"
import Layout from "./components/layout/Layout"
import AllQuotes from "./pages/AllQuotes"
import NewQuote from "./pages/NewQuote"
import QuoteDetails from "./pages/QuoteDetails"

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>

        <Route path="/new-quote">
          <NewQuote />
        </Route>
        <Route path="/quotes/:quoteId" exact>
          <QuoteDetails />
        </Route>
      </Switch>
    </Layout>
  )
}

export default App
