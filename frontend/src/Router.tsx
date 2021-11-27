import {Switch, Route} from "react-router"
import { Home, Items, User } from "./components/pages";
import { useSelector } from "react-redux";
import { getSignedIn } from "./reducks/users/selectors";

const Router = () => {
    const selector = useSelector(state => state);
    const signedIn = getSignedIn(selector)
    
    return (
        <Switch>
            {!signedIn ?
                <Route exact path="(/)?" component={Home} />
            :
                <>
                    <Route path="/user/" component={User} />
                    <Route exact path="/items" component={Items} />
                </>
            }
        </Switch>
    );
}

export default Router;