// -- Tabbing functionality --
var tabs = document.querySelectorAll('.main li'),
    lastVisitedTab = document.querySelector('.jan'),
    lastVisitedCard = document.querySelector('.jan-container'),
    blockedMonths = ['aug', 'sep', 'oct', 'nov', 'dec'];

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

// -- Navigation on Mobile --
var homeTab = document.querySelector('.home-link'),
    aboutTab = document.querySelector('.about-link'),
    partTab = document.querySelector('.participants-link'),
    partLinks = document.querySelectorAll('.person');

partTab.addEventListener('click', function() {
  homeTab.classList.remove('underline');
  aboutTab.classList.remove('underline');
  partTab.classList.add('underline');

  partLinks.forEach(function(person) {
    person.classList.add('block');
  });
});

if (location.pathname === '/') {
  homeTab.classList.add('underline');
  partTab.classList.remove('underline');
} else if (location.pathname === '/about') {
  aboutTab.classList.add('underline');
  partTab.classList.remove('underline');
} else if (location.pathname.includes('people')) {
  partTab.classList.add('underline');
}

// -- Mouseover icons on homepage --
var icons = document.querySelectorAll('.nonagon .icons');

icons.forEach(function(icon) {
  icon.addEventListener('mouseover', function () {
    var className = icon.classList[1],
        hoveredContainer = document.getElementById(className),
        blurbContainers = document.querySelectorAll('.blurb-container');

    blurbContainers.forEach(function(container) {
      container.classList.remove('display');
    });
    hoveredContainer.classList.add('display');
  });
});
