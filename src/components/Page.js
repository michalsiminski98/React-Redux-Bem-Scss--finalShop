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
      <Route path='/shop'>
        <Shop/>
      </Route>
      <Route path='/shop:id'>
        <Item/>
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