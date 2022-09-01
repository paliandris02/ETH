"use strict";

const wallets = document.getElementById("selected_wallet").options;

const state = {
  fastTransfer: 0.0001913,
  standardTransfer: 0.00005631,
};

const calcBtn = document.querySelector(".calc");
calcBtn.addEventListener("click", (e) => {
  const selectedWallet =
    document.getElementById("selected_wallet").selectedIndex;
  console.log(wallets[selectedWallet]);
});
function calculate() {
  let fast = 0.0001913;
  let standard = 0.00005631;
  if (document.getElementById("send").value <= 0) {
    document.getElementById("send").value = "INVALID";
  } else {
    if (b[a].value == "Argent") {
      if (document.getElementById("under2m").checked) {
        let amount = document.getElementById("send").value;
        document.getElementById("receive").value = amount * Number(0.98) - fast;
        document.getElementById("fee").value = amount * Number(0.02) + fast;
      } else {
        let amount = document.getElementById("send").value;
        document.getElementById("receive").value =
          amount * Number(0.98) - standard;
        document.getElementById("fee").value = amount * Number(0.02) + standard;
      }
    }
    if (b[a].value == "Dharma") {
      if (document.getElementById("under2m").checked) {
        let amount = document.getElementById("send").value;
        document.getElementById("receive").value = amount * Number(0.98) - fast;
        document.getElementById("fee").value = amount * Number(0.02) + fast;
      } else {
        let amount = document.getElementById("send").value;
        document.getElementById("receive").value =
          amount * Number(0.98) - standard;
        document.getElementById("fee").value = amount * Number(0.02) + standard;
      }
    }
    if (b[a].value == "Coinbase") {
      if (document.getElementById("under2m").checked) {
        let amount = document.getElementById("send").value;
        document.getElementById("receive").value = amount * Number(0.98) - fast;
        document.getElementById("fee").value = amount * Number(0.02) + fast;
      } else {
        let amount = document.getElementById("send").value;
        document.getElementById("receive").value =
          amount * Number(0.98) - standard;
        document.getElementById("fee").value = amount * Number(0.02) + standard;
      }
    }
    if (b[a].value == "AlphaWallet") {
      if (document.getElementById("under2m").checked) {
        let amount = document.getElementById("send").value;
        document.getElementById("receive").value = amount * Number(0.98) - fast;
        document.getElementById("fee").value = amount * Number(0.02) + fast;
      } else {
        let amount = document.getElementById("send").value;
        document.getElementById("receive").value =
          amount * Number(0.98) - standard;
        document.getElementById("fee").value = amount * Number(0.02) + standard;
      }
    }
  }
}
