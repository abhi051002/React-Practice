import { useRouteError } from "react-router-dom";


const Error =()=>{
    const err = useRouteError();
    console.log(err);
    return (
        <div className="error-page">
            <h1 className="error-status">{err.status}</h1>
            <h1 className="error-text">{err.statusText}</h1>
            <h2 className="error-message">{err.error}</h2>
        </div>
    )
}

export default Error;