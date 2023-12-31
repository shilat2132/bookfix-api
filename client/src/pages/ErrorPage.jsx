import { useRouteError } from "react-router-dom"
import { Navigation } from "../UI/Root";

export const ErrorPage = ()=>{
    const error = useRouteError()
    let errorMessage;
    if(error.data){
        if(error.data.message){
            errorMessage = error.data.message
        }else{
            errorMessage = error.data
        }
    }else{
        errorMessage="something went wrong"
    }
    return(
        <>
            <Navigation/>
            <div className="errorMessage container">{errorMessage}</div>
        </>
        
    )
}