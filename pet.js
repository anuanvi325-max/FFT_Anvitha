let totalPrice = 0;

function addToCart(productName, price){

    const list = document.getElementById("cart-items");

    const item = document.createElement("li");
    item.textContent = productName + " - ₹" + price;

    list.appendChild(item);

    totalPrice += price;

    document.getElementById("total-price").innerText = totalPrice;
}

function filterProducts(type){

    const products = document.querySelectorAll(".product");

    products.forEach(product => {

        if(type === "all"){
            product.style.display = "block";
        }
        else if(product.dataset.pet === type){
            product.style.display = "block";
        }
        else{
            product.style.display = "none";
        }

    });
}
