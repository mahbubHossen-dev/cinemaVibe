import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../components/loading';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(user) {
        return children;
    }
    if(loading){
        return <Loading></Loading>
    }

    return (
        <Navigate state={location.pathname} to={'/login'}>
            {/* Private */}
        </Navigate>
    );
};

export default PrivateRoute;