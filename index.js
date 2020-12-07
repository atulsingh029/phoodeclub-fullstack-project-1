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
let temp =`<h4 align="center">OUR OFFERINGS <a onclick="closemenu()"> <span color="red"><i class="fa fa-times-circle"></i></span></a></h4><br><div class="row">
${items.map(function(obj){
    return `
    <div class="card m-3" style="max-width: 400px;background-color:rgb(255, 248, 238);">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img src="${obj.img}" class="img-fluid p-2" alt="${obj.name}">
      </div>
      <div class="col-md-8 m-0 p-0">
        <div class="card-body m-1  p-1">
          <h5 class="card-title p-1 m-0">${obj.name} <a onclick=add_to_cart(${obj.id})><i class="fa fa-plus-circle"></i></a></h5>
          <p class="card-text p-1 m-0" style="overflow: hidden;">${obj.description}</p>
          <p class="card-text p-1 m-0">${obj.price}</p>
          <small>${obj.category}</small>
        </div>
      </div>
    </div>
  </div>
    `;
}).join("")}
</div>
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