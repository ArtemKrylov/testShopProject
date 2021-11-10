import React from 'react'
import ProductItem from './ProductItem'
import PropTypes from 'prop-types'

//Компонент - общее окно списка товаров
function ProductList(props){
    return (
        <ul className = 'productListStyles'>
            {props.products.map((product, index) => {
                return (
                    <ProductItem 
                        key = {product.id} 
                        product = {product} 
                        index = {index} 
                        changeCheckboxFunction = {props.basketItem} 
                        incrementNumber = {props.incrementProduct} 
                        decrementNumber = {props.decrementProduct}
                    />
                )
            })}
        </ul>
    )
}

ProductList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ProductList;
