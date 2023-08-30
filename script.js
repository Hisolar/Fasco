// const clothes =[
//     {
//         name:"Shiny Dress",
//         categorise: "woman",
//         img:["./assets/images/w1.png","./assets/images/stars.png"],
//         price: $95,
//     },
//     {
//         name:"Long Dress",
//         categorise: "woman",
//         img:["./assets/images/w1.png","./assets/images/stars.png"],
//         price: $95,
//     },
//     {
//         name:"Full Sweater",
//         categorise: "woman",
//         img:["./assets/images/w1.png","./assets/images/stars.png"],
//         price: $95,
//     },
//     {
//         name:"White Dress",
//         categorise: "woman",
//         img:["./assets/images/w1.png","./assets/images/stars.png"],
//         price: $95,
//     },
//     {
//         name:"Colorful Dress",
//         categorise: "woman",
//         img:["./assets/images/w1.png","./assets/images/stars.png"],
//         price: $95,
//     },
//     {
//         name:"",
//         categorise: "woman",
//         img:["./assets/images/w1.png","./assets/images/stars.png"],
//         price: $95,
//     }
// ]











// let menuButton = document.getElementById("menuButton")
// let menuContainer = document.getElementById("menuContainer")

// function showToggle(){
//     menuContainer.classList.toggle("show")
// }
// menuButton.addEventListener("click", showToggle)

// let signUp = document.getElementById("signUp")

// let signIn = document.getElementById("signIn")

// signUp.addEventListener("click", ()=>{
// })


const loginBtn = document.getElementById("loginBtn")
const registerBtn = document.getElementById("registerBtn2")
const login = document.getElementById("login")
const registration = document.getElementById("registration")
const section = document.getElementById("sec")

registerBtn.addEventListener("click",()=>{
    login.classList.add("hide")
    registration.classList.add("flexIt")
    login.classList.remove("flexIt")

})


loginBtn.addEventListener("click",()=>{
    login.classList.add("flexIt")
    registration.classList.add("hide")
    registration.classList.remove("flexIt")
})