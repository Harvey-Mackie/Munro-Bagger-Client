import { makeStyles } from "@material-ui/core";
import { FunctionComponent } from "react";
import LoginFormContainer from "./LoginFormContainer";

const useStyles = makeStyles( () => ({
    container:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }
}))

interface LoginPageProps {
    
}
 
const LoginPage: FunctionComponent<LoginPageProps> = () => {
    const styles = useStyles();
    
    return ( 
        <div className={styles.container}>
            <h2>Sign in</h2>
            <LoginFormContainer/>
        </div>
    );
}
 
export default LoginPage;