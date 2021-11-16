import React from 'react'
import ProductItem from './ProductItem'
import PropTypes from 'prop-types'
import {useNavigate} from 'react-router-dom'

//Компонент - общее окно списка товаров
function ProductList(props){
    let navigate = useNavigate();

    return (
        <div id="productListComponent">
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
            <div id = 'buttonToBasketFromMain'>
                <button className = 'navigateButton' onClick = {() => navigate('/testShopProject/basket')} >Перейти в корзину</button>
            </div> 
        </div>
        
    )
}

ProductList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ProductList;
