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
if (!localStorage.getItem("shopCount")) {
    localStorage.setItem("shopCount", "1");
}
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
            product.innerHTML += `
  <div data-id="${item.id}" class="product w-full border border-gray-400 rounded-sm">
                        <div class="w-full p-4">
                            <img class="min-w-full" src="${item.photo}" alt="product">
                        </div>
                        <div class="product_info px-6 pb-6">
                            <h3 class="shdg font-bold text-[--black-color]">${item.name}</h3>
                            <p class="prg text-[--black-color]">${item.about}</p>
                            <div class="product_buying mt-4 flex justify-between items-center gap-1">
                                <div class="price text-[--white-color] py-[0.15em] px-5 bg-[--main-color]">${item.price}</div>
                                <div class="w-[5em] border-2 text-center flex items-center justify-evenly gap-1">
                                    <i data-id="${item.id}" id="minusShop" class="fa-solid fa-minus fa-lg cursor-pointer" style="color: #ff2929;"></i>
                                    <p data-id="${item.id} id="shopNum" class="prg">1</p>
                                    <i data-id="${item.id}" id="plusShop" class="fa-solid fa-plus fa-lg cursor-pointer" style="color: #43be41;"></i>
                                </div>
                                <i class="fa-solid fa-cart-shopping fa-lg cursor-pointer text-[--main-color]"></i>
                            </div>
                        </div>
                    </div>
  `;
            catalogProducts.append(product);
        }
    });
    let minusShop = document.querySelectorAll("#minusShop");
    let plusShop = document.querySelectorAll("#plusShop");
    let shopNum = document.querySelectorAll("#shopNum");
    plusShop.forEach((item) => {
        item.addEventListener("click", (e) => {
            // let target = e.target as HTMLElement;
            // let dataId: string | null = target.getAttribute("data-id");
            // console.log(dataId);
            let localShopCount = localStorage.getItem("shopCount");
            let newShopCount = (Number(localShopCount) || 0) + 1;
            localStorage.setItem("shopCount", newShopCount.toString());
        });
    });
    minusShop.forEach((item) => {
        item.addEventListener("click", (e) => {
            let localShopCount = localStorage.getItem("shopCount");
            let newShopCount = (Number(localShopCount) || 0) - 1;
            localStorage.setItem("shopCount", newShopCount.toString());
        });
    });
});
// plusShop?.addEventListener("click", (e) => {
//   let target = e.target as HTMLElement;
//   let dataId: string | null = target.getAttribute("data-id");
//   data.forEach((item: Product) => {
//     if (item.id === dataId) {
//       console.log(dataId);
//       console.log(target);
//     }
//   });
// });
let showcaseItem_img = document.getElementById("showcaseItem-img");
let showcaseSwiper_left = document.getElementById("showcaseSwiper-left");
let showcaseSwiper_right = document.getElementById("showcaseSwiper-right");
let showcaseImg_num = document.getElementById("showcase_img-num");
let showcaseImg_num_view = 1;
showcaseSwiper_right.addEventListener("click", () => {
    if (showcaseImg_num_view < 8) {
        showcaseImg_num_view++;
        showcaseImg_num.textContent = showcaseImg_num_view.toString();
    }
});
showcaseSwiper_left.addEventListener("click", () => {
    if (showcaseImg_num_view > 1) {
        showcaseImg_num_view--;
        showcaseImg_num.textContent = showcaseImg_num_view.toString();
    }
});
getProducts("productPhoto").then((data) => {
    function showcaseFunc(id) {
        showcaseItem_img.style.cssText = `background-image: url(..${data[id].photo});`;
    }
    showcaseFunc(0);
});
// ----------------------------------------------------------
//# sourceMappingURL=main.js.map