
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loader from "../Components/Others/Loader/Loader";

const useFirebase = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [signInWithGoogle, gLoading] = useSignInWithGoogle(auth);
    const from = location.state?.from?.pathname || '/';

    const signInGoogle = () => {
        signInWithGoogle()
            .then(() => { 
                navigate(from, { replace: true });
            })
    };

    if ( gLoading) {
        return <Loader />;
    }



    const logOut = () => {
        return signOut(auth)
            .then((result) => { })
            .catch((error) => {
                console.log(error);
            });
    };



    return {
        signInGoogle,
        logOut,

    };
};

export default useFirebase;