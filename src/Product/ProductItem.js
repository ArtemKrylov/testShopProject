import React from 'react'
import PropTypes from 'prop-types'
import ProductItemStyles from './ProductItemStyles.css'
import PlusMinusNumberBar from './PlusMinusNumberBar'

//Компонент для продажи отдельных продуктов
function ProductItem({product, index, changeCheckboxFunction, incrementNumber, decrementNumber}){
    
    return (
        <li className = 'productItemStyles' >
            {/* Изображение продукта */}
            <img src = {product.imgSource} alt = 'Изображение' className = 'productImg'/>

            {/* Информация о продукте - имя и цена */}
            <span className = 'productNameAndValue'>
                <div>
                    <input 
                        type = 'checkbox' 
                        className = 'input'
                        checked = {product.isAddedToBasket} 
                        onChange = {() => changeCheckboxFunction(product.id)}
                    />
                    {index + 1}
                </div>
                {product.name} 
                <strong> {product.value + " $/кг"} </strong>
            </span>

            {/* Кнопка добавления продукта в корзину */}
            <button type = 'button' className = 'button' className = 'itemButton' onClick = {() => changeCheckboxFunction(product.id)}>
                {!product.isAddedToBasket ? 'Добавить в корзину' : 'Удалить из корзины'}
            </button>

            {/* Регулировка количества товаров */}
            <PlusMinusNumberBar 
                boughtProduct = {product}
                decrementNumber = {decrementNumber} 
                incrementNumber = {incrementNumber}
    
            />
        </li>
    )     
}

ProductItem.propTypes = {
    product: PropTypes.array.isRequired,
    index: PropTypes.number,
    changeCheckboxFunction: PropTypes.func.isRequired
}

export default ProductItem