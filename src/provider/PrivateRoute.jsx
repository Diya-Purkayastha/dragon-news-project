import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../page/Loading';

const PrivateRoute = ({children}) => {

    //if--> user exist return children or navigate to login
        const {user, loading} = use(AuthContext)

        const location = useLocation();

        if(loading){
            return <Loading></Loading>;
        }

        if(user && user?.email){
            return children
        }
        //redirect to login
        return <Navigate state={location.pathname} to='/auth/login'></Navigate>

    
};

export default PrivateRoute;