import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact />
        <Route path="/quotes" >
          <AllQuotes/>
        </Route>
      </Switch>

    </div>
  );
}

export default App;
