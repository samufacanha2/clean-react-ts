import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home/';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
