window.addEventListener("DOMContentLoaded", startEggHunt);

// Variabler
let point;
const myModal = new bootstrap.Modal(
  document.querySelector("#competitionModal"),
  {
    keyboard: false,
  }
);

function startEggHunt() {
  console.log("startEggHunt");

  new bootstrap.Toast(document.querySelector("#liveToast"), {
    autohide: false,
  }).show();

  document.querySelector(".toast-btn").addEventListener("click", function () {
    console.log("toast");
    new bootstrap.Toast(document.querySelector("#liveToast"), {
      autohide: false,
    }).show();
  });

  document.querySelector(".toast-btn2").addEventListener("click", function () {
    console.log("toast2");
    new bootstrap.Toast(document.querySelector("#liveToast"), {
      autohide: false,
    }).show();
  });

  // Nulstil point
  point = 0;

  // Opdater antal point
  document.querySelector(".counter").textContent = `${point} æg i kurven`;

  // Klik på egg -> clickEgg
  document.querySelector(".egg-1").addEventListener("click", clickEgg);
  document.querySelector(".egg-2").addEventListener("click", clickEgg);
  document.querySelector(".egg-3").addEventListener("click", clickEgg);
  document.querySelector(".egg-4").addEventListener("click", clickEgg);
  document.querySelector(".egg-5").addEventListener("click", clickEgg);
}

function clickEgg() {
  console.log("clickEgg");
  this.removeEventListener("click", clickEgg);

  this.classList.add("animate__backOutUp", "animate__animated");
  this.addEventListener("animationend", function () {
    this.classList.add("disappear");
  });
  this.classList.remove(
    "animation-egg-peak-right",
    "animation-egg-peak-left",
    "egg-move-right",
    "egg-move-left",
    "egg-opacity"
  );

  const eggType = this.dataset.eggtype;
  const eggInBasket = document.querySelector(`g[data-eggtype=${eggType}]`);
  eggInBasket.classList.remove("hidden");

  eggInBasket.classList.add("animate__fadeInDownBig", "animate__animated");

  // point++
  point++;

  // Opdater antal point
  document.querySelector(".counter").textContent = `${point} æg i kurven`;

  if (point >= 5) {
    levelComplete();
  }
}

function stopSpillet() {
  console.log("stopSpillet");

  // Fjern alle eventlisteners
  document.querySelector(".egg-1").removeEventListener("click", clickEgg);
  document.querySelector(".egg-2").removeEventListener("click", clickEgg);
  document.querySelector(".egg-3").removeEventListener("click", clickEgg);
  document.querySelector(".egg-4").removeEventListener("click", clickEgg);
  document.querySelector(".egg-5").removeEventListener("click", clickEgg);

  document
    .querySelector(".egg-1")
    .classList.remove(
      "animation-egg-peak-right",
      "animation-egg-peak-left",
      "egg-move-right",
      "egg-move-left"
    );
  document
    .querySelector(".egg-2")
    .classList.remove(
      "animation-egg-peak-right",
      "animation-egg-peak-left",
      "egg-move-right",
      "egg-move-left"
    );
  document
    .querySelector(".egg-3")
    .classList.remove(
      "animation-egg-peak-right",
      "animation-egg-peak-left",
      "egg-move-right",
      "egg-move-left"
    );
  document
    .querySelector(".egg-4")
    .classList.remove(
      "animation-egg-peak-right",
      "animation-egg-peak-left",
      "egg-move-right",
      "egg-move-left"
    );
  document
    .querySelector(".egg-5")
    .classList.remove(
      "animation-egg-peak-right",
      "animation-egg-peak-left",
      "egg-move-right",
      "egg-move-left"
    );

  if (point >= 5) {
    levelComplete();
  }
}

function levelComplete() {
  console.log("levelComplete");

  // Skriv “Level complete - du fjernede XX stencils” ud i konsollen
  // console.log("Tillykke - du fandt alle " + point + " æg!");
  // document.querySelector(".counter").textContent =
  //   "Tillykke - du fandt alle " + point + " æg!";

  myModal.show();

  document.querySelector("#basket").addEventListener("click", function () {
    console.log("modal");
    new bootstrap.Modal(document.querySelector("#competitionModal")).show();
  });
}
