import React from "react";
import PlusMinusNumberBar from "./PlusMinusNumberBar";
import {useNavigate} from "react-router-dom"

//Компонент корзина с продуктами, общей ценой и оплатой
export default function Basket({products, incrementNumber, decrementNumber, isBasketEmpty, setProducts, productNamesInBasket, setProductNamesInBasket}){
    let totalPrice = 0; //Общая цена товаров в корзине
    let navigate = useNavigate();

    //Подсчет цену продукта, учитывая количество в корзину и скидку за количество товара
    function calcPrice(product){
        return product.value * product.numberInBasket - product.discount * Math.floor(product.numberInBasket / product.discountForNumberBought);
    }

    //Убрать продукт из добавленных в корзину при нажатии на кнопку "х"
    function expelFromBusket(product){
        setProducts(
            products.map(
                (prod) => {
                    if(prod.id === product.id){
                        prod.isAddedToBasket = false;
                        prod.numberInBasket = 0;
                        setProductNamesInBasket(productNamesInBasket -= 1);
                    }
                    return prod;
                }
            )
        )
    }


    //рендеринг компонента в зависимости есть ли продукты в корзине или она пуста
    if(isBasketEmpty){
        return <div className = 'basketComponent'>
            <div className = 'emptyBasket'>Корзина пуста :(</div> 
            <button className = 'navigateButton' onClick = {() => navigate('/testShopProject/')} >Перейти на главную страницу</button> 
        </div>
    } else{
        return (
            <div className = 'basketComponent'>
                <ul className ="basketUl">
                {
                    products.map( (product) => {
                        if(product.isAddedToBasket && product.numberInBasket > 0){
                            isBasketEmpty = false;
                            totalPrice += calcPrice(product);
                            return(
                                <li className = "basketLi">
                                    <div className = "productBasketId">{product.name}</div>
                                    <div className = "productBasketValue">{`${product.value} $`}</div>
                                    <div className = "productBasketNumber">{`№ ${product.numberInBasket}`}</div>
                                    <div className = "productBasketDiscount">
                                        {`cкидка ${product.discount * Math.floor(product.numberInBasket/product.discountForNumberBought)} $`}
                                    </div>
                                    <PlusMinusNumberBar 
                                        boughtProduct = {product} 
                                        decrementNumber = {decrementNumber} 
                                        incrementNumber = {incrementNumber}
                                        
                                    />
                                    <div className = 'productTotalPrice'>
                                        {`${product.value * product.numberInBasket - product.discount * 
                                            Math.floor(product.numberInBasket/product.discountForNumberBought)} $`}
                                    </div>
                                    <button onClick = {() => expelFromBusket(product)} id = 'expelFromBasket'>x</button>
                                </li>
                            )
                        }
                    })
                }
                </ul>
                <div className = 'summeryBasket'>
                    <div>
                        <div>Общая сумма:</div>
                        <div id = "totalPrice">{`${totalPrice} $`}</div>
                    </div>
                    <button className = 'payButton'>Перейти к оплате</button>
                </div>
                <button className = 'navigateButton' onClick = {() => navigate('/testShopProject/')} >Перейти на главную страницу</button> 
            </div>
            
        )
        
    }
}
