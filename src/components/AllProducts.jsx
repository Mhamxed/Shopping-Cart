import '../index.css'
import useFetch from '../hooks/useFetch'
import Product from './product'

function AllProducts() {
    const { data, isLoading, error} = useFetch('https://fakestoreapi.com/products')
    return (
        <>
            {error && <div>{ error }</div>}
            {isLoading && <div>Loading...</div>}
            {data && <div className="all-products">
                {data.map(product => {
                    return (
                    <Product 
                    id={product.id}
                    img={product.image}
                    title={product.title}
                    price={`$${product.price}`}
                    key={product.id}
                    />)
                })}
            </div>}
        </>
    )
}

export default AllProducts