import '../style/products.css'
import ProductCard from './ProductCard'

export default function Products(){
    return(
        <div className='products'>
            <ProductCard/>
            <ProductCard/>  
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
    )
}