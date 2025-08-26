import { Link } from "react-router"

const Dashboard = () => {

    const dashboardItems = [
        {id:1, title:"My Profile"},
        {id:2, title: "My Projects"},
        {id:3, title: "My Teams"},
        {id:4, title: "My Products"}
    ]


    return(
        <>
            <Link to="/">Back to Home</Link>
            <h1>Dashboard Header</h1>
            <ul>
                {dashboardItems.map((item) => (
                    <li key={item.id}>
                        <Link to={`/dashboard/${item.id}`}>
                            <h2>{item.title}</h2>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Dashboard