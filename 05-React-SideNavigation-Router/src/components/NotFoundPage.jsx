import { Link } from "react-router"

const NotFoundPage = () => {
    return(
        <>
            <h1>The page you are looking for doesnot exist</h1>
            <Link to={"/"}>
                <button>Go back Home</button>
            </Link>
        </>
    )
}

export default NotFoundPage