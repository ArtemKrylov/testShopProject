import React from "react";

//Компонент верхней панели
function TopBar ({goToBasket, productNamesInBasket}){
    return (
         <header className = 'header'>
             <div>It's the header</div>
             <div className = "basketImgAndNumber">
                <img 
                    src = "basketImage.png" 
                    className = "basketImage" 
                    alt = "корзина" 
                    onMouseUp = {goToBasket} 
                    title = 'Перейти в корзину'
                />
                <div className = "numberOfProductsInBasket">
                    {productNamesInBasket}
                </div>
            </div>
        </header>
    )
}

export default TopBar;