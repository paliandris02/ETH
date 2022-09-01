"use strict";

const wallets = document.getElementById("selected_wallet").options;
const receiveAmount = document.getElementById("receive");
const feeAmount = document.getElementById("fee");

const transferType = new Map();
transferType.set(false, 0.00005631).set(true, 0.0001913);

const walletsOptions = {
  wallets: [
    {
      name: "Argent",
      fee: 0.001,
    },
    {
      name: "Dharma",
      fee: 0.005,
    },
    {
      name: "Coinbase",
      fee: 0.014,
    },
    {
      name: "AlphaWallet",
      fee: 0.008,
    },
  ],
};

const calcBtn = document.querySelector(".calc");

calcBtn.addEventListener("click", (e) => {
  const selectedWallet =
    document.getElementById("selected_wallet").selectedIndex;
  const walletName = wallets[selectedWallet].value;

  const amount = document.getElementById("send");

  if (amount.value <= 0 || isNaN(amount.value)) {
    amount.value = "Invalid.";
    return;
  }
  render(walletName, amount.value);
});

const render = function (selectedWalletName, amount) {
  const isFastTransfer = document.getElementById("under2m").checked;
  let fees;
  for (const { name, fee } of walletsOptions.wallets) {
    if (name === selectedWalletName) {
      fees = fee;
      break;
    }
  }
  renderAmounts(isFastTransfer, amount, fees);
};

const renderAmounts = function (isFastTransfer, amount, fees) {
  receiveAmount.value = (
    Number(amount) -
    Number(amount) * Number(fees) -
    transferType.get(isFastTransfer)
  ).toFixed(5);
  feeAmount.textContent = `Total fee: ${(
    Number(amount) * Number(fees) +
    transferType.get(isFastTransfer)
  ).toFixed(5)}`;
};
