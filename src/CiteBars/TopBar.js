import React from "react";
import {NavLink, useNavigate} from 'react-router-dom'

//Компонент верхней панели
function TopBar ({productNamesInBasket}){
    let navigate = useNavigate();
    return (
         <header className = 'header'>
             <nav id="navLinksBar">
                 <NavLink to = "/testShopProject/" className = 'navLink'>Главная страница</NavLink>
                 <NavLink to = "/testShopProject/basket" className = 'navLink'>Корзина</NavLink>
             </nav>
             <div className = "basketImgAndNumber">
                <img 
                    src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkxK_JuIXs1RguYddwJkhOiQouLCkK0Ut95Q&usqp=CAU" 
                    className = "basketImage" 
                    alt = "корзина" 
                    onMouseUp = {() => navigate("/testShopProject/basket")} 
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