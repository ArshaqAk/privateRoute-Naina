import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const PrivateRoute=({children})=>{
    const navigate= useNavigate()

    let isLogged= false;
    if(isLogged){
        return children
    }
    else{
        useEffect(()=>{
            navigate('/')
        },[])
    }
}

export default PrivateRoute;