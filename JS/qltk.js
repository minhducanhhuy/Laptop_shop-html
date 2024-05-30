taikhoan = document.querySelector('.qltk-myaccount.accout');
donhang = document.querySelector('.qltk-myaccount.cart');
logout = document.querySelector('.qltk-myaccount.logout');
qldonhang = document.querySelector('.qltk-info2');
info = document.querySelector('.qltk-info1');
donhang.onclick = function () {
    qldonhang.classList.add('open');
    info.classList.remove('open');
}
taikhoan.onclick = function () {
    info.classList.add('open');
    qldonhang.classList.remove('open');
}


logout.onclick = function () {
    // localStorage.removeItem('token');
    location.href = '../tab2/login2.html';
}