async function getProducts(product: any) {
  try {
    let response = await fetch(`http://localhost:3000/${product}`);
    let data = await response.json();
    if (!response.ok) {
      console.log(`ma'lumot olishda xatolik`);
    }
    return data;
  } catch (error) {
    console.log(error + ` xatolik yuz berdi`);
  }
}

let catalogProducts = document.querySelector(".catalog_products");

interface Product {
  id: string;
  name: string;
  about: string;
  price: string;
  photo: string;
}
let num: number = Number(localStorage.getItem("shopCount"));

getProducts("products").then((data) => {
  let calculator: number = 0;

  data.forEach((item: Product) => {
    calculator++;
    if (calculator <= num) {
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
    item.addEventListener("click", (e: any) => {
      let localShopCount: string | null = localStorage.getItem("shopCount");
      let newShopCount = (Number(localShopCount) || 0) + 1;
      localStorage.setItem("shopCount", newShopCount.toString());
    });
  });
  minusShop.forEach((item) => {
    item.addEventListener("click", (e: any) => {
      let localShopCount: string | null = localStorage.getItem("shopCount");
      let newShopCount = (Number(localShopCount) || 0) - 1;
      localStorage.setItem("shopCount", newShopCount.toString());
    });
  });
});
