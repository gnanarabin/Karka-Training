import { useLocation,Link, useLoaderData } from "react-router-dom"

function Url(){
    let url=useLocation().pathname
    // console.log(url);
    return (
        <div>
            <h2>{url}</h2>
        </div>
    )
}
export default Url