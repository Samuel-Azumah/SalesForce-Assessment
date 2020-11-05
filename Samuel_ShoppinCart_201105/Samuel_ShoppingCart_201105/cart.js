let carts=document.querySelectorAll('.add-cart');

let products=[{
name:'Jordan Air',
tag:'JordanAir',
price:350, 
inCart:0
},
{
    name:'Jordan',
    tag:'Jordan',
    price:500, 
    inCart:0
    }
];
for (let i=0; i<carts.length; i++){
    carts[i].addEventListener('click', ()=>{
       CartNumbers(products[i]);
       totalCost(products[i])
    })
}

function onloadCartNumbers(){
    let productNumbers= localStorage.getItem('CartNumbers');
    if (productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function CartNumbers(product){
    let productNumbers=localStorage.getItem('CartNumbers');

     productNumbers=parseInt(productNumbers);
       
     if (productNumbers){
         localStorage.setItem('CartNumbers', productNumbers + 1);
         document.querySelector('.cart span').textContent= productNumbers +1;
     }else{
        localStorage.setItem('CartNumbers', 1);  
        document.querySelector('.cart span').textContent=1;
     }
setItems(product);
}

function setItems(product){
    let carItems=localStorage.getItem('productsInCart');
    carItems=JSON.parse(carItems);

    if (carItems != null){
        if (carItems[product.tag] == undefined){
            carItems = {
                ...carItems, 
                [product.tag]:product
            }
        }
        carItems[product.tag].inCart +=1;
    }else{
        product.inCart=1;
    carItems={
        [product.tag]:product
    } 
    }
 
    localStorage.setItem("productsInCart", JSON.stringify(carItems));
}

function totalCost(product){
    let cartCost=localStorage.getItem("totalCost");
    

    if (cartCost !=null){
       cartCost=parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost +
        product.price);
    }else{
        localStorage.setItem("totalCost", product.price);
    }
}

function displayCart(){
   let cartItems=localStorage.getItem("productsInCart");
   cartItems=JSON(cartItems);
let productContainer=document.querySelector(".products");
let cartCost=localStorage.getItem("totalCost");
   if (cartItems && productContainer){
    productContainer.innerHTML="";
    Object.values(cartItems).map(item =>{
        productContainer.innerHTML+=`
        <div class="product">
        <ion-icon name="close-circle"></icon-icon>

        <span>${item.name}</span>
        </div>
        document.querySelectorAll('#image').item.tag;
          <div class="price">${item.price}</div>
          <div class="quantity">${item.price}</div>
          <div class="total">¢${item.inCart*item.price}</div>`
    });

productContainer.innerHTML+=`
<di class="basketContainer">
<h4 class="basketTotalTitle"> Basket Total</h4>
<h4 class="basketTotal">¢${cartCost}</h4>
`

   }
}
onloadCartNumbers();