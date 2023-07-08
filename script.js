function itemPlusMinus(itemQtyId, itemPriceId, trueFalse) {
  const itemQty = document.getElementById(itemQtyId).value;
  const itemQtyNumber = parseInt(itemQty);
  if (trueFalse == true) {
    totalQty = itemQtyNumber + 1;
  } else if (trueFalse == false && itemQtyNumber > 1) {
    totalQty = itemQtyNumber - 1;
  }
  const newQty = (document.getElementById(itemQtyId).value = totalQty);
  if (itemPriceId == "phonePrice") {
    document.getElementById(itemPriceId).innerText = 1219 * newQty;
  } else if (itemPriceId == "casePrice") {
    document.getElementById(itemPriceId).innerText = 59 * newQty;
  }
  totalCalculate();
}

function totalCalculate() {
  const totalPhonePrice = document.getElementById("phonePrice").innerText;
  const totalPhonePriceNumber = parseInt(totalPhonePrice);

  const totalCasePrice = document.getElementById("casePrice").innerText;
  const totalCasePriceNumber = parseInt(totalCasePrice);

  document.getElementById("subtotal").innerText = parseInt();
  newSubtotal = totalPhonePriceNumber + totalCasePriceNumber;
  document.getElementById("subtotal").innerText = newSubtotal;

  const tax = Math.round(newSubtotal * 0.1);
  document.getElementById("tax").innerText = tax;

  const grandTotal = newSubtotal + tax;
  document.getElementById("grandTotal").innerText = grandTotal;
}
