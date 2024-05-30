quanlity = document.querySelector('.header__cart-list--quantity');
quanlityitem = document.querySelectorAll('.product-item');
// console.log(quanlityitem.length);
quanlity.innerText = quanlityitem.length;
clearcart = document.querySelectorAll('.product-item-remove');
quanlitynoitem = document.querySelector('.header__no-cart');
for (i = 0; i < quanlityitem.length; i++) {
    clearcart[i].addEventListener('click', function () {
        this.parentElement.parentElement.parentElement.remove();
        quanlity = document.querySelector('.header__cart-list--quantity');
        quanlityitem = document.querySelectorAll('.header__cart-list-product-item li');
        quanlity.innerText = quanlityitem.length;
        if (quanlityitem.length === 0) {
            quanlitynoitem.classList.add('openflex');

        }
        else {
            quanlitynoitem.classList.remove('openflex');
        }
    });
}


