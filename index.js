var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var itemName = item;
 var itemPrice = Math.floor(Math.random()*100);
 cart.push(item = {
   [itemName]: itemPrice})
 console.log(`${itemName} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
  var message = "";
  if(cart.length === 0){
    message ="Your shopping cart is empty.";
  }
  else{
    message = "In your cart, you have ";
    for(var i = 0; i < cart.length; i++){
      var items = Object.keys(cart[i]);
      var price = Object.values(cart[i]);
      if(cart.length === 1){
        message += `${items} at $${price}.`;
      }
      else if(i === cart.length-1){
        message += `and ${items} at $${price}.`;
      }
      else if(cart.length === 2){
        message += `${items} at $${price} `
      }
      else{
        message += `${items} at $${price}, `;
      }
    }
  }
  return console.log(message);
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
