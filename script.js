

document.getElementById('memory8gb').addEventListener('click', function () {
    document.getElementById('memoryPrice').innerText = 50;
    let storeit = parseFloat(document.getElementById('memoryPrice').innerText);
    let storagePrice = parseFloat(document.getElementById('storagePrice').innerText);
    let deleveryPrice = parseFloat(document.getElementById('deleveryCharge').innerText);
    let totalbasicPrice = document.getElementById('totalbasicPrice').innerText = 1250 + storeit + storagePrice + deleveryPrice;
    document.getElementById('totalPrice').innerText = totalbasicPrice;
})
document.getElementById('memory16gb').addEventListener('click', function () {
    document.getElementById('memoryPrice').innerText = 100;
    let storeit = parseFloat(document.getElementById('memoryPrice').innerText);
    let storagePrice = parseFloat(document.getElementById('storagePrice').innerText);
    let deleveryPrice = parseFloat(document.getElementById('deleveryCharge').innerText);
    let totalbasicPrice = document.getElementById('totalbasicPrice').innerText = 1290 + storeit + storagePrice + deleveryPrice;
    document.getElementById('totalPrice').innerText = totalbasicPrice;
})
document.getElementById('storage256gb').addEventListener('click', function () {
    document.getElementById('storagePrice').innerText = 75;
    let storeit = parseFloat(document.getElementById('memoryPrice').innerText);
    let storagePrice = parseFloat(document.getElementById('storagePrice').innerText);
    let deleveryPrice = parseFloat(document.getElementById('deleveryCharge').innerText);
    let totalbasicPrice = document.getElementById('totalbasicPrice').innerText = 1290 + storeit + storagePrice + deleveryPrice;
    document.getElementById('totalPrice').innerText = totalbasicPrice;
})
document.getElementById('storage512gb').addEventListener('click', function () {
    document.getElementById('storagePrice').innerText = 150;
    let storeit = parseFloat(document.getElementById('memoryPrice').innerText);
    let storagePrice = parseFloat(document.getElementById('storagePrice').innerText);
    let deleveryPrice = parseFloat(document.getElementById('deleveryCharge').innerText);
    let totalbasicPrice = document.getElementById('totalbasicPrice').innerText = 1290 + storeit + storagePrice + deleveryPrice;
    document.getElementById('totalPrice').innerText = totalbasicPrice;
})
document.getElementById('storage1TB').addEventListener('click', function () {
    let storagePrice = document.getElementById('storagePrice').innerText = 250;
    let storeit = parseFloat(document.getElementById('memoryPrice').innerText);
    let deleveryPrice = parseFloat(document.getElementById('deleveryCharge').innerText);
    let totalbasicPrice = document.getElementById('totalbasicPrice').innerText = 1290 + storeit + storagePrice + deleveryPrice;
    document.getElementById('totalPrice').innerText = totalbasicPrice;
})
document.getElementById('delevery1').addEventListener('click', function () {
    document.getElementById('deleveryCharge').innerText = 40;
    let deleveryPrice = parseFloat(document.getElementById('deleveryCharge').innerText);
    let storeit = parseFloat(document.getElementById('memoryPrice').innerText);
    let storagePrice = parseFloat(document.getElementById('storagePrice').innerText);
    let totalbasicPrice = document.getElementById('totalbasicPrice').innerText = 1290 + storeit + storagePrice + deleveryPrice;
    document.getElementById('totalPrice').innerText = totalbasicPrice;
})
document.getElementById('delevery2').addEventListener('click', function () {
    document.getElementById('deleveryCharge').innerText = 20;
    let deleveryPrice = parseFloat(document.getElementById('deleveryCharge').innerText);
    let storeit = parseFloat(document.getElementById('memoryPrice').innerText);
    let storagePrice = parseFloat(document.getElementById('storagePrice').innerText);
    let totalbasicPrice = document.getElementById('totalbasicPrice').innerText = 1290 + storeit + storagePrice + deleveryPrice;

    document.getElementById('totalPrice').innerText = totalbasicPrice;
})
document.getElementById('submit').addEventListener('click', function () {
    let promo = document.getElementById('promoCode').value;
    if (promo == 'sudipto') {
        let total = parseFloat(document.getElementById('totalPrice').innerText);
        let grandTotal = total - (total * 10) / 100;
        document.getElementById('totalPrice').innerText = grandTotal;

    }
    else {
        alert('Soytane Chale???');
    }
})