let cart = [];

function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
  }

function user_status_checker(){
    {
        let usertype = localStorage.getItem("usertype");
        if (usertype === 'home-d' || usertype === 'walk-in'){
        }
        else {
            togglePopup();    
        }
    }
}

function walkin(){
    localStorage.setItem("usertype", "walk-in");
    togglePopup();
}

function homed(){
    localStorage.setItem("usertype", "home-d");
    togglePopup();
}

document.addEventListener("load", user_status_checker() );
let items = [
{"id":"0","name":"Burger","description":"no data available","price":"Rs. 150","img":"","category":"Starter"},
{"id":"1","name":"Chilli Potato","description":"no data available","price":"Rs. 300 per plate","img":"","category":"starter"},
{"id":"2","name":"Fried Rice","description":"no data available","price":"Rs. 300 per plate","img":"/static/fr.jpg","category":"main course"},
{"id":"3","name":"Chapati","description":"no data available","price":"Rs. 45","img":"","category":"main course"},
{"id":"4","name":"Ice Cream","description":"no data available","price":"Rs. 120","img":"/static/icec.jpg","category":"desert"},
{"id":"5","name":"Chicken","description":"no data available","price":"Rs. 300","img":"/static/chicken.jpg","category":"non veg"},
{"id":"6","name":"Egg Curry","description":"no data available","price":"Rs. 250 per plate","img":"","category":"non veg"},
{"id":"7","name":"Biryani","description":"no data available","price":"Rs. 500 per plate","img":"","category":"non veg"},
];
function loadmenu(){

let area = document.getElementById("listing_area");
let temp =`<h4 align="center">OUR OFFERINGS <a onclick="closemenu()"> <span color="red"><i class="fa fa-times-circle"></i></span></a></h4><br>
${items.map(function(obj){
    return `
  <div class="row">
    <div class="col-4 col-md-1"> 
        <img src="${obj.img}" class="img-fluid rounded p-2" height=100px width=100px alt="${obj.name}">
    </div>
    <div class="col-8 col-md-11">  
        <div class="card-body m-1  p-1">
          <h5 class="card-title p-1 m-0">${obj.name}<a onclick=add_to_cart(${obj.id})> <i class="fa fa-plus-circle"></i></a></h5>
          <p class="card-text p-1 m-0" style="overflow: hidden;">${obj.description}</p>
          <small>${obj.category}</small>
          <small>${obj.price}</small>
        </div>
        <hr>
    </div>  
  </div>
    `;
}).join("")}

<div class="row"><div class="col p-2 text-center"><button class="btn btn-sm btn-success" onclick="checkout()">Proceed To Checkout</button></div></div>
`;

area.innerHTML = temp;
}


function add_to_cart(id){
    alert("Added!")
    cart.push(items[id]);
}

function closemenu(){
    let area = document.getElementById("listing_area");
    area.innerHTML="";
}


function checkout(){
    console.log(cart)
}

function forms(){
    alert("We have received your enquiry request, we'll reply soon!");
}