import React, { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/Auth/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading} = useState(AuthContext)
    const location = useLocation()

if(loading){
    return <h1 className="text-center text-5xl">Loading....</h1>
}

    if(user && user?.uid){
        return children;
    }
    else{
        <Navigate to='/login' state={{from:location}} replace></Navigate> ;
    }
};

export default PrivateRoute;