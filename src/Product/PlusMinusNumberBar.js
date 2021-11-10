import React from 'react'

//Компонент - панель уменьшения-увеличения количества
export default function PlusMinusNumberBar({boughtProduct, decrementNumber, incrementNumber}){
    return(
        <div className = 'plusMinusNumberBar'>
            <button className = 'changeNumberButton' onClick = {() => decrementNumber(boughtProduct.id)} >-</button>
            <div id = 'productAmount'>{boughtProduct.numberInBasket}</div>
            <button className = 'changeNumberButton' onClick = {() => incrementNumber(boughtProduct.id)} >+</button>
        </div>
    )
}