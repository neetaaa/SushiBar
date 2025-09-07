const modal = document.getElementById("cartModal");
const modalTitle = document.getElementById("modalTitle");
const modalPrice = document.getElementById("modalPrice");
const quantityEl = document.getElementById("quantity");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const confirmBtn = document.getElementById("confirmAdd");
const closeBtn = document.querySelector(".close");

let currentItem = null;
let quantity = 1;

document.querySelectorAll(".add-to-cart").forEach(btn =>{
    btn.addEventListener("click", ()=>{
        const item = btn.closest(".item");
        currentItem = {
            title: item.querySelector("h2").innerText,
            price: item.querySelector(".price").innerText
        };
        quantity = 1;
        quantityEl.innerText = quantity;
        modalTitle.innerText = currentItem.title;
        modalPrice.innerText = currentItem.price;
        modal.style.display = "flex";
    });
});

increaseBtn.addEventListener("click", ()=>{
    quantity++;
    quantityEl.innerText = quantity;
});

decreaseBtn.addEventListener("click", ()=>{
    if(quantity > 1){
        quantity--;
        quantityEl.innerText = quantity;
    }
});

closeBtn.addEventListener("click", ()=>{
    modal.style.display = "none";

});
