const clothes = [
  {
    name: "Shiny Dress",
    category: "woman",
    img: "./assets/images/w1.png",
    price: "$95",
  },
  {
    name: "Long Dress",
    category: "woman",
    img: "./assets/images/w2.png",
    price: "$95",
  },
  {
    name: "Full Sweater",
    category: "woman",
    img: "./assets/images/w3.png",
    price: "$95",
  },
  {
    name: "White Dress",
    category: "man",
    img: "./assets/images/w4.png",
    price: "$95",
  },
  {
    name: "Colorful Dress",
    category: "man",
    img: "./assets/images/w5.png",
    price: "$95",
  },
  {
    name: "",
    category: "man",
    img: "./assets/images/w6.png",
    price: "$95",
  },
];

const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn2");
const login = document.getElementById("login");
const registration = document.getElementById("registration");
const section = document.getElementById("sec");
const signUp = document.getElementById("signUp");
const signIn = document.getElementById("signIn");

// signIn.accessKeyLabel("click", () => {
//   section.classList.remove("hide");
// });

// signUp.addEventListener("click", () => {
//   section.classList.remove("hide");
// });

registerBtn.addEventListener("click", () => {
  login.classList.add("hide");
  registration.classList.add("flexIt");
  login.classList.remove("flexIt");
});

loginBtn.addEventListener("click", () => {
  login.classList.add("flexIt");
  registration.classList.add("hide");
  registration.classList.remove("flexIt");
});

// let menFashion = document.getElementById("menFashion");
// let womenFashion = document.getElementById("womenFashion");
// let womenAccess = document.getElementById("womenAccess");
// let menAccess = document.getElementById("menAccess");
// let discountDeal = document.getElementById("discountDeal");
// let fashion = document.getElementById("fashion");

// let womanClothe = clothes.filter((element) => {
//   return element.category === "woman";
// });

// console.log(womanClothe.length);
// let cloth = womanClothe
//   .map((element) => {
//     return `<div class="bg-white drop-shadow-2xl px-8 py-4 flex flex-col gap-5">
//     <img src="${element.img}" alt="">
//     <div class="flex flex-wrap items-center justify-between">
//         <ul class="">
//             <li>${element.name}</li>
//             <li>${element.category}</li>
//       </ul>
//         <img srcalt="">

//     </div>
//     <p>(4.1k) Customer Reviews</p>

//     <ul class="flex flex-wrap items-center justify-between">
//         <li class="text-xl font-bold text-gray-600">${element.price}</li>
//         <li class="text-red-700">Almost sold out</li>
//     </ul>
// </div>`;
//   })
//   .join("");

// womenFashion.addEventListener("click", () => {
//   fashion.innerHTML = cloth;
// });
