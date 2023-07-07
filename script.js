/* document.getElementById("plusBtn").addEventListener("click", function () {
  const itemQty = document.getElementById("itemQty").value;
  const itemQtyNumber = parseInt(itemQty);
  const totalQty = itemQtyNumber + 1;
  document.getElementById("itemQty").value = totalQty;
}); */


document.getElementById("plusBtn").addEventListener("click",itemPlusMinus('itemQty'));

document.getElementById("plusBtn").addEventListener("click", ){

    function itemPlusMinus(id){
        const itemQty = document.getElementById(id).value;
        const itemQtyNumber = parseInt(itemQty);
        const totalQty = itemQtyNumber + 10;
        document.getElementById(id).value = totalQty;
    }
}




document.getElementById("minusBtn").addEventListener("click", function () {
  const itemQty = document.getElementById("itemQty").value;
  const itemQtyNumber = parseInt(itemQty);
  const totalQty = itemQtyNumber - 1;
  document.getElementById("itemQty").value = totalQty;
});
