"use strict";

let cardWrapper = document.querySelector('.wrapper');

// ------------ RENDER FUNCTION --------------------


function renderProducts(data) {
    
if(data.products.length > 0) {

    data.products.forEach((el)=>{

        const {title, brand , thumbnail , price , discountPercentage}=el;

        
        const card=document.createElement('div');
        card.classList.add('card');
        card.innerHTML=`
        <div class="w-[227px] h-[295px] boxShadow rounded-[18px] swiper-slide">
        <img src="${thumbnail}" alt="" class="max-w-[250px] w-[100%] h-[150px] rounded-t-[18px]">
            <div class="p-4">
            <p>${title}</p>
            <p><span class="font-black">${price}</span> <span class="line-through">${Math.round(price*1.44)}</span></p>
            <p class="text-[#249B3E]">Save - ₹${Math.round(price*1.44) - price}</p>
            <div class="text-red-600">
                ${Math.round(discountPercentage)}%
                OFF
            </div>
            </div>
        </div>
         `;

         cardWrapper.appendChild(card);

    }) 
}else{
    cardWrapper.innerHTML=`<h1 class="text-center"> NOT FOUND </h1>`
}

}

renderProducts(product)
