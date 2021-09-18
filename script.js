

let menuBar=document.querySelector('#bar');
const navBar=document.querySelector('.navInfo');

if(menuBar){
menuBar.onclick = ()=>{
    menuBar.classList.toggle('fa-times');
    navBar.classList.toggle('active');
}

var navigation=document.querySelectorAll('.navLinks');

var clickMenu= function(e){
for(let i=0;i<navigation.length;i++){
    navigation[i].classList.remove('active');
}
navigation[e].classList.add('active');
}

for(let i=0;i<navigation.length;i++){
navigation[i].addEventListener('click',()=>{
    clickMenu(i);
})
}

var slides=document.querySelectorAll('.slider');
var btns=document.querySelectorAll('.navbtn');
let currentSlide=1;

var manually =function(manual){
    slides.forEach((slider) =>{
        slider.classList.remove('active');
        btns.forEach((navbtn =>{
            navbtn.classList.remove('active');
        } ))
    })
    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}

btns.forEach((navbtn,i)=>{
    navbtn.addEventListener("click", () =>{
        manually(i);
        currentSlide=i;
    })
})
var auto = function(activeClass){
    let active=document.getElementsByClassName('active');
     let i=1;

     var repeater = () =>{
         setTimeout(function(){

            [...active].forEach((activeSlide) =>{
                activeSlide.classList.remove('active');
            })
             slides[i].classList.add('active');
             btns[i].classList.add('active');
             i++;

             if(i==slides.length){
                 i=0;
             }
             if(i>=slides.length){
                 return;
             }
             repeater();
         }, 5000);
     }
     repeater();
}
auto();




let cart =document.querySelectorAll(".addCart");
for(let i=0;i<cart.length;i++){
    cart[i].addEventListener("click", ()=> {
        cartNumber(Dishes[i]);
        totalCost(Dishes[i]);
    });
}
function onLoadCart(){
    let dishNo=localStorage.getItem('cartNumber');
    if(dishNo){
        document.querySelector('.Acart span').textContent = dishNo;
    }
}
function cartNumber(dish){
    let dishNo=localStorage.getItem('cartNumber');
    dishNo=parseInt(dishNo);

    if(dishNo){
        localStorage.setItem("cartNumber", dishNo+1);
        document.querySelector('.Acart span').textContent = dishNo + 1;
    }
    else{
    localStorage.setItem("cartNumber",1);
     document.querySelector('.Acart span').textContent = 1;
    }

    setItems(dish);
}

function setItems(dish){

    let cartItems=localStorage.getItem("cartDish");
    cartItems=JSON.parse(cartItems);
    if(cartItems!=null){
        if(cartItems[dish.tag]==undefined){
            cartItems={
                ...cartItems,
                [dish.tag]: dish
            }
        }
        cartItems[dish.tag].inCart+=1;
    }
    else{
        dish.inCart=1;
        cartItems={
            [dish.tag]:dish
        }
    }
    
localStorage.setItem("cartDish",JSON.stringify(cartItems));
}

function totalCost(dish){
    let cartCost=localStorage.getItem("total");
    if(cartCost!= null){
        cartCost=parseInt(cartCost);
        localStorage.setItem("total", cartCost + dish.price);
    }else{
    localStorage.setItem("total",dish.price);
    }
}


onLoadCart();


let Dishes=[
    {
        name:'Farm Fresh Pizza',
        tag:"farm",
        price:399,
        inCart:0
    },
    {
        name:'Veg Sandwich',
        tag:"sand",
        price:160,
        inCart:0
    },
    {
        name:'Red Sauce Pasta',
        tag:"redP",
        price:199,
        inCart:0
    },
    {
        name:'Orange Juice',
        tag:"orange",
        price:49,
        inCart:0
    },
    {
        name:'Margherita',
        tag:"marg",
        price:299,
        inCart:0
    },
    {
        name:'Special Fries',
        tag:"sFries",
        price:65,
        inCart:0
    },
    {
        name:'Indi Tandoori Pizza',
        tag:"indi",
        price:399,
        inCart:0
    },
    {
        name:'Veg Extravaganza',
        tag:"extravaganza",
        price:450,
        inCart:0
    },
    {
        name:'Lemon Mojito',
        tag:"mojito",
        price:79,
        inCart:0
    },

    //pizza
    {
        name:'Farm Fresh Pizza',
        tag:"farm",
        price:399,
        inCart:0
    },
    {
        name:'Margherita',
        tag:"marg",
        price:299,
        inCart:0
    },
    {
        name:'Indi Tandoori Pizza',
        tag:"indi",
        price:399,
        inCart:0
    },
    {
        name:'Deluxe Veggie Pizza',
        tag:"deluxVeg",
        price:499,
        inCart:0
    },
    {
        name:'Italian Pizza',
        tag:"italian",
        price:550,
        inCart:0
    },
    {
        name:'Veg Extravaganza',
        tag:"extravaganza",
        price:450,
        inCart:0
    },
    {
        name:'Extra Cheese Pizza',
        tag:"extra cheese",
        price:350,
        inCart:0
    },
    {
        name:'Bellpepper Pizza',
        tag:"bellpepper",
        price:299,
        inCart:0
    },
    {
        name:'Veggie Paradise Pizza',
        tag:"paradise",
        price:309,
        inCart:0
    },

    //burger
    {
        name:'Veggie Burger',
        tag:"veg burger",
        price:59,
        inCart:0
    },
    {
        name:'Maharaja Burger',
        tag:"maharaja",
        price:89,
        inCart:0
    },
    {
        name:'Double Story Burger',
        tag:"double story",
        price:129,
        inCart:0
    },
    {
        name:'French Fries',
        tag:"fries",
        price:49,
        inCart:0
    },
    {
        name:'Special Fries',
        tag:"sFries",
        price:65,
        inCart:0
    },
    {
        name:'Cheese Burger',
        tag:"cheese burger",
        price:79,
        inCart:0
    },
    //specials
    {
        name:'Red Sauce Pasta',
        tag:"redP",
        price:199,
        inCart:0
    },
    {
        name:'White Sauce Pasta',
        tag:"whiteP",
        price:199,
        inCart:0
    },
    {
        name:'Veg Sandwich',
        tag:"sandwich",
        price:79,
        inCart:0
    },
    //beverages
    {
        name:'Lemon Mojito',
        tag:"mojito",
        price:79,
        inCart:0
    },
    {
        name:'Pineapple Juice',
        tag:"pine",
        price:59,
        inCart:0
    },
    {
        name:'Orange Juice',
        tag:"orange",
        price:49,
        inCart:0
    }
]


let orderForm=document.querySelector(".formContainer");
orderForm.addEventListener('submit', function checkCart(event){
    let itemsInCart= localStorage.getItem("cartNumber");
    if(itemsInCart){
localStorage.clear();
}
else{
    alert("Your Cart is Empty!!");
    event.preventDefault();
}
})
}

function display(){
    let dishContainer=document.querySelector('.cartDishes');
let cartItems=localStorage.getItem("cartDish");
let cartTotal=localStorage.getItem("total");
let items=localStorage.getItem("cartNumber");
items=parseInt(items);
cartItems=JSON.parse(cartItems);
if(cartItems && dishContainer){
    dishContainer.innerHTML ='';
    Object.values(cartItems).map(item);
    function item(item){
        dishContainer.innerHTML += `
        <tbody class="cartBody">
        <tr>
        <td> ${item.name}</td>
        <td> ${item.price}</td>
        <td> ${item.inCart}</td>
        <td> ${item.price*item.inCart}</td>
        <tr>
        </tbody>
        `
    };
    dishContainer.innerHTML+= `<tr">
    <td colspan="2" class="totalPrice">Total Price</td>
    <td colspan="2"  class="totalPrice">${cartTotal}</td>
    </tr>
    `
}
}

display();
