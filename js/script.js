menuItems = document.querySelectorAll(".hide-js");

document.querySelector('.main-menu__container').classList.add('main-menu__container--js');

document.querySelector('.page-header').classList.add('page-header--js');

(function() {

var i = menuItems.length;
while (i--) {
    menuItems[i].classList.add('closed-mobile');
}

})();

var hamburger = document.querySelector('.page-header__toggle');
hamburger.classList.add('page-header__toggle--closed');

hamburger.addEventListener("click", function(event) {
  hamburger.classList.toggle('page-header__toggle--closed');

  (function() {
    var i = menuItems.length;
    while (i--) {
        menuItems[i].classList.toggle('closed-mobile');
    }
})();

});
