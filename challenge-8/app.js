const cartItems = document.getElementById("cart-items");
const emptyCart = document.querySelector(".empty-cart");
const cartTotal = document.getElementById("cart-total");

let totalPrice = 0;
let allCartItems = [];

function addToCart(item,price) {
   const existingItem = allCartItems.find(citem=>citem.name === item)
   if(existingItem){
      existingItem.quantity++;
     return updateCart();
   }

   let newItem = {
        name:item,
        price,
        quantity:1
   }
   allCartItems.push(newItem)
   updateCart();  
}


function updateCart(){
   cartItems.innerHTML = ""
   totalPrice = 0;

   if (allCartItems.length === 0) {
      emptyCart.style.display = "block";
      cartTotal.innerText = "Total: $0.00";
      return;
  }
  emptyCart.style.display = "none";
  allCartItems.forEach((cartItem, index) => {
   const cart = document.createElement("div");
   cart.className = "container";

   const itemName = document.createElement("div");
   itemName.innerText = cartItem.name;

   const cartComponent = document.createElement("div");
   cartComponent.className = "cart-component";

   const incrementQuantity = document.createElement("button");
   incrementQuantity.className = "op-btn";
   incrementQuantity.innerText = "+";

   const cartQuantity = document.createElement("div");
   cartQuantity.innerText = cartItem.quantity;

   const decrementQuantity = document.createElement("button");
   decrementQuantity.className = "op-btn";
   decrementQuantity.innerText = "-";

   const individualCartTotalPrice = document.createElement("div");
   individualCartTotalPrice.innerText = `$${(cartItem.price * cartItem.quantity).toFixed(2)}`;

   const removeBtn = document.createElement("div");
    removeBtn.innerText = "Remove";
    removeBtn.className = "remove-btn";
    removeBtn.addEventListener("click", () => {
        allCartItems.splice(index, 1);
        updateCart();
    });

   incrementQuantity.addEventListener("click", () => {
       cartItem.quantity++;
       updateCart();
   });

   decrementQuantity.addEventListener("click", () => {
       if (cartItem.quantity > 1) {
           cartItem.quantity--;
       } else {
           allCartItems.splice(index, 1); 
       }
       updateCart();
   });

   cartComponent.appendChild(incrementQuantity);
   cartComponent.appendChild(cartQuantity);
   cartComponent.appendChild(decrementQuantity);
   
   cartComponent.appendChild(individualCartTotalPrice);
   cartComponent.appendChild(removeBtn);


   cart.appendChild(itemName);
   cart.appendChild(cartComponent);
   cartItems.appendChild(cart);
   
   totalPrice += cartItem.price * cartItem.quantity;
});

cartTotal.innerText = `Total: $${totalPrice.toFixed(2)}`;
}