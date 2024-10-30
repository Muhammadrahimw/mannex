"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let catalogProducts = document.querySelector(".catalog_products");
function getProducts(product) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let response = yield fetch(`http://localhost:3000/${product}`);
            let data = yield response.json();
            if (!response.ok) {
                console.log(`ma'lumot olishda xatolik`);
            }
            return data;
        }
        catch (error) {
            console.log(error + ` xatolik yuz berdi`);
        }
    });
}
function postProduct(product) {
    fetch(`http://localhost:3000/products`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
    });
}
getProducts("products").then((data) => {
    let calculator = 0;
    data.forEach((item) => {
        calculator++;
        if (calculator <= 6) {
            let product = document.createElement("div");
            product.innerHTML = `
  <div class="product w-full border border-gray-400 rounded-sm">
                        <div class="w-full p-4">
                            <img class="min-w-full" src="${item.photo}" alt="product">
                        </div>
                        <div class="product_info px-6 pb-6">
                            <h3 class="shdg font-bold text-[--black-color]">${item.name}</h3>
                            <p class="prg text-[--black-color]">${item.about}</p>
                            <div class="product_buying mt-4 flex justify-between items-center gap-1">
                                <div class="price text-[--white-color] py-[0.15em] px-5 bg-[--main-color]">${item.price}</div>
                                <div class="w-[5em] border-2 text-center flex items-center justify-evenly gap-1">
                                    <i class="fa-solid fa-minus fa-lg cursor-pointer" style="color: #ff2929;"></i>
                                    <p class="prg">1</p>
                                    <i class="fa-solid fa-plus fa-lg cursor-pointer" style="color: #43be41;"></i>
                                </div>
                                <i class="fa-solid fa-cart-shopping fa-lg cursor-pointer text-[--main-color]"></i>
                            </div>
                        </div>
                    </div>
  `;
            catalogProducts.append(product);
        }
    });
});
let showcaseItem_img = document.getElementById("showcaseItem-img");
let showcaseSwiper_left = document.getElementById("showcaseSwiper-left");
let showcaseSwiper_right = document.getElementById("showcaseSwiper-right");
getProducts("productPhoto").then((data) => {
    function showcaseFunc(id) {
        showcaseItem_img.style.cssText = `background-image: url(..${data[id].photo});`;
    }
    showcaseFunc(0);
    // data.forEach((item: Product) => {
    //   showcaseItem_img.style.cssText = `background-image: url(..${item.photo});`;
    // });
});
//# sourceMappingURL=main.js.map