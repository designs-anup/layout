const Navigation = () => {

    const NavigationList = [{id:1, name: "Home", url: "#"},
                            {id:2, name: "About", url: "#"},
                            {id:3, name: "Products", url: "#"},
                            {id:4, name: "Services", url: "#"},
                            {id:5, name: "Contact", url: "#"}]
    const Nav = NavigationList.map((nav) => (<li key={nav.id}><a href={nav.url}>{nav.name}</a></li>))

    return(
        <>
            <ul>{Nav}</ul>
        </>
    )
}

export default Navigation