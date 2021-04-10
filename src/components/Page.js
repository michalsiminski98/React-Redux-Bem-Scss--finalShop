import { Route, Switch } from "react-router";
import Main from "../pages/Main";
import Shop from "../pages/Shop";
import Item from "../pages/Item";
import Cart from "../pages/Cart";
import ErrorPage from "../pages/ErrorPage";

const Page = () => {
  return ( 
    <Switch>
      <Route exact path='/'>
        <Main/>
      </Route>
      <Route exact path='/shop'>
        <Shop/>
      </Route>
      {/* this have to be in "component=..." if we want to use props.location, etc. */}
      <Route path='/shop/:id' component={Item}>
      </Route>
      <Route path='/cart'>
        <Cart/>
      </Route>
      <Route path='/'>
        <ErrorPage/>
      </Route>
    </Switch>
   );
}
 
export default Page;