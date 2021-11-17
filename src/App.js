import React from 'react'
import ProductList from './Product/ProductList'
import TopBar from './CiteBars/TopBar'
import BottomBar from './CiteBars/BottomBar'
import Basket from './Product/Basket'
import Error from './Error'
import { BrowserRouter, Routes, Route} from 'react-router-dom'


export default function App() {
  let [products, setProducts] = React.useState([
    {id: 1, name: 'Банан', value: 10, isAddedToBasket: false, numberInBasket: 0, discount: 0, discountForNumberBought: 1, imgSource: 'https://good-tips.pro/images/health/banana/banana-health-big.jpg'},
    {id: 2, name: 'Яблоко', value: 8, isAddedToBasket: false,  numberInBasket: 0, discount: 0, discountForNumberBought: 1, imgSource: 'https://st.depositphotos.com/1003272/1632/i/600/depositphotos_16322913-stock-photo-red-apple.jpg'},
    {id: 3, name: 'Папайа', value: 10, isAddedToBasket: false,  numberInBasket: 0, discount: 5, discountForNumberBought: 3, imgSource: 'https://yesfrukt.com/storage/source/0f494eef36046ddb3223867e02350e99/content/1/xyMiQSxRPe4pojDgSx4f-zxofYyQaUe7f.jpeg.pagespeed.ic.GShY-v5PZe.jpg'}
  ]);

  let [productNamesInBasket, setProductNamesInBasket] = React.useState(0); //количество наименований товаров в корзине
  let [isBasketEmpty, setBasketState] = React.useState(true);   //индикатор пустоты корзины

  return (
      <BrowserRouter>
        <TopBar productNamesInBasket = {productNamesInBasket}/>
        <Routes>
          <Route exact path = {"/testShopProject/"} element = {<ProductList 
                products = {products} 
                basketItem = {addToBasket} 
                incrementProduct = {incrementNumber} 
                decrementProduct = {decrementNumber}
              />
            } 
          />

          <Route exact path = "/testShopProject/basket" element = {<Basket 
              products = {products}   
              className = 'basketComponent' 
              incrementNumber = {incrementNumber} 
              decrementNumber = {decrementNumber}
              isBasketEmpty = {isBasketEmpty}
              setProducts = {setProducts}
              productNamesInBasket = {productNamesInBasket}
              setProductNamesInBasket = {setProductNamesInBasket}
              />
            } 
          />

          <Route path = '*' element = {<Error />} />
          
        </Routes>
        <BottomBar/>
      </BrowserRouter>
    
  );

  //Функция добавить товар в корзину - количество товаров - 1
  function addToBasket(id){
    setProducts ( 
      products.map(
        product => {
          if(product.id === id){
            setProductNamesInBasket(productNamesInBasket = product.isAddedToBasket ? --productNamesInBasket : ++productNamesInBasket);
            setBasketState(false);
            product.isAddedToBasket = !product.isAddedToBasket;
            product.numberInBasket = Number(!Boolean(product.numberInBasket));
          }
          return product;
        }
      )
    )
  }

  //Функция уменьшить количество товара на 1, если станет 0  - удалить из корзины
  function decrementNumber (id){
    setProducts(  
      products.map( 
        product => {
          if(product.id === id){
            product.numberInBasket = (product.numberInBasket > 0) ? --product.numberInBasket : 0;
            if(product.numberInBasket === 0) {
              product.isAddedToBasket = false;
              setProductNamesInBasket(productNamesInBasket -= 1);
            } 
          }
          return product;
        }
      )
    )
  }

  //Функция увеличить количество товара на 1, если изначально 0  - добавить в корзину
  function incrementNumber(id) {
    setProducts(
      products.map( (product) => {
        if(product.id === id){
          if(product.numberInBasket === 0) {
            addToBasket(id);
          } else{
            product.numberInBasket  += 1;
          } 
        }
        return product;
      })
    )
  }
  
}
