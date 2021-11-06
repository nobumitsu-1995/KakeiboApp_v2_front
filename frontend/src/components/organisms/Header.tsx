import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { AppBar, Typography } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import Button from "../atoms/Button";
import { useDispatch } from "react-redux";
import { signIn, signOut } from "../../reducks/users/operations";
import HeaderUserMenu from "./HeaderUserMenu";

const Header: React.FC = () => {
    const { loginWithRedirect, isAuthenticated, user } = useAuth0();
    const dispatch = useDispatch();

    useEffect(() => {
        if (isAuthenticated) {
            dispatch(signIn(user))
        } else {
            dispatch(signOut())
        }
    }, [isAuthenticated, user, dispatch])

    return (
        <AppBar position="fixed">
            <Toolbar className="header">
                <Typography variant="h6" component="div">
                    KakeiboApp
                </Typography>
                {!isAuthenticated ?
                    <Button
                        children="ログイン"
                        color="primary"
                        size="medium"
                        variant="contained"
                        onClick={loginWithRedirect}
                    />
                :
                    <div className="flex">
                        <Button
                            children="Personal finance"
                            color="inherit"
                            size="large"
                            variant="text"
                            onClick={() => {console.log("index")}}
                        />
                        <HeaderUserMenu/>
                    </div>
                    
                }
            </Toolbar>
        </AppBar>
    );
}

export default Header;