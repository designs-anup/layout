import { useParams } from "react-router";
import { Link } from "react-router";

const ProductsPage = () => {

    const { id } = useParams();

    return (
        <div>
            <Link to="/">Back to Home</Link>
            <h1>Products</h1>
            <p>Details for product ID: {id}</p>
        </div>
    );
};

export default ProductsPage;
