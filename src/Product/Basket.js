import React from "react";
import PlusMinusNumberBar from "./PlusMinusNumberBar";

//Компонент корзина с продуктами, общей ценой и оплатой
export default function Basket({products, incrementNumber, decrementNumber, isBasketEmpty, setProducts, productNamesInBasket, setProductNamesInBasket}){
    let totalPrice = 0; //Общая цена товаров в корзине
    class BoughtProductConstructorFunc {  //класс конструкции объекта в корзине для добавления в массив
        constructor(name, value, discount, numberInBasket){
            this.name = name;
            this.value = value;
            this.discount = discount;
            this.numberInBasket = numberInBasket;
        }
        
    }

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
        return <div className = 'basketComponent'><div className = 'emptyBasket'>Корзина пуста :(</div> </div>
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
                                    <div id = "productBasketId">{product.name}</div>
                                    <div id = "productBasketValue">{`${product.value} $`}</div>
                                    <div id = "productBasketNumber">{`№ ${product.numberInBasket}`}</div>
                                    <div id = "productBasketDiscount">{`% ${product.discount}`}</div>
                                    <PlusMinusNumberBar 
                                        boughtProduct = {product} 
                                        decrementNumber = {decrementNumber} 
                                        incrementNumber = {incrementNumber}
                                        
                                    />
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
            </div>
            
        )
        
    }
}
