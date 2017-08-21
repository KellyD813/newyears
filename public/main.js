var tabs = document.querySelectorAll('.main li'),
    lastVisitedTab = document.querySelector('.jan'),
    lastVisitedCard = document.querySelector('.jan-container'),
    blockedMonths = ['aug', 'sep', 'oct', 'nov', 'dec'];

// -- Tabbing functionality --
tabs.forEach(function(tab) {
  if (blockedMonths.indexOf(tab.classList[0]) === -1) {
    tab.addEventListener("click", function(e) {
      var clicked = document.querySelector('.' + e.target.classList[0] + '-container');
      if (lastVisitedCard !== clicked) {

        clicked.classList.remove('hide');
        lastVisitedCard.classList.add('hide');
        lastVisitedCard = clicked;

        e.target.classList.add('underline');
        lastVisitedTab.classList.remove('underline');
        lastVisitedTab = e.target;

      }
    });
  }
});
