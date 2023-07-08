function itemPlusMinus(trueFalse) {
  const itemQty = document.getElementById("itemQty");
  const itemQtyNumber = parseInt(itemQty.value);
  if (trueFalse == true) {
    totalQty = itemQtyNumber + 1;
  } else if (trueFalse == false && itemQtyNumber > 0) {
    totalQty = itemQtyNumber - 1;
  }
  const newQty = (document.getElementById("itemQty").value = totalQty);
  const itemPrice = document.getElementById("itemPrice");
  document.getElementById("itemPrice").innerText = 1219 * newQty;
}
