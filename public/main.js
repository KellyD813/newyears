var tabs = document.querySelectorAll('.main li'),
    lastVisited = document.querySelector('.jan-container');

// -- Tabbing functionality --
tabs.forEach(function(tab) {
  tab.addEventListener("click", function(e) {
    var clicked = document.querySelector('.' + e.target.classList.value + '-container');
    if (lastVisited !== clicked) {
      clicked.classList.remove('hide');
      lastVisited.classList.add('hide');
      lastVisited = clicked;
    }
  });
});
