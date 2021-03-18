window.addEventListener("DOMContentLoaded", startEggHunt);

let eggsInBasket;

function startEggHunt() {
  console.log("startet");
  eggsInBasket = 0;

  document.querySelector(".egg").addEventListener("click", addEggToBasket);
}

function addEggToBasket() {
  console.log("added to basket");

  eggsInBasket++;
}

// function startEggHunt() {
// const eggStatus = {
// blue: false,
// rede: false,
// yellow: false,
// green: false,
// purple: false
// };
// let eggsInBasket = 0;
// const eggs = document.querySelector(".egg");
// eggs.forEach(egg, => {
// egg.addEventListener("click", addEggToBasket);
// });

// function addEggToBasket(event) {
// const clickedEgg = event.target;
// if (clickedEgg.dataset.eggtype) {
// eggStatus.[clickedEgg.dataset.eggtype] = true;
// eggsInBasket++;
// showEggInBasket(clickedEgg);
// } else {
// console.log("Egg already clicked");
// }

// checkEggStatus();
// }
// function checkEggStatus() {
// if (eggsInBasket >= 5) {
//     console.log(yes! vundet!)
// // Show bootstrap modal thingy magingiiii
// } else {
// return;
// }
// }
// function showEggInBasket(egg) {
// const basket = document.querySelector("#basket");
// basket.append(egg);
// basket.querySelector(".counter").textContent = eggsInBasket;
// }
// }

// const eggStatus = {
//     blue: false,
//     rede: false,
//     yellow: false,
//     green: false,
//     purple: false
//     };
//     let eggsInBasket = 0;
//     const eggs = document.querySelector(".egg");
//     eggs.forEach(egg, => {
//     egg.addEventListener("click", addEggToBasket);
//     });

//     function addEggToBasket(event) {
//     const clickedEgg = event.target;
//     if (clickedEgg.dataset.eggtype) {
//     eggStatus.[clickedEgg.dataset.eggtype] = true;
//     eggsInBasket++;
//     showEggInBasket(clickedEgg);
//     } else {
//     console.log("Egg already clicked");
//     }

//     checkEggStatus();
//     }
//     function checkEggStatus() {
//     if (eggsInBasket >= 5) {
//         console.log(yes! vundet!)
//     // Show bootstrap modal thingy magingiiii
//     } else {
//     return;
//     }
//     }
//     function showEggInBasket(egg) {
//     const basket = document.querySelector("#basket");
//     basket.append(egg);
//     basket.querySelector(".counter").textContent = eggsInBasket;
//     }
//     }
