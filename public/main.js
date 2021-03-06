// -- Tabbing through Months --
var tabs = document.querySelectorAll('.main li'),
    lastVisitedTab = document.querySelector('.jan'),
    lastVisitedCard = document.querySelector('.jan-container');

tabs.forEach(function(tab) {
  tab.addEventListener('click', function(e) {
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
});

// -- Navigation on Mobile --
var homeTab = document.querySelector('.home-link'),
    aboutTab = document.querySelector('.about-link'),
    partTab = document.querySelector('.participants-link'),
    personLinks = document.querySelectorAll('.person');

partTab.addEventListener('click', function() {
  homeTab.classList.remove('underline');
  aboutTab.classList.remove('underline');
  partTab.classList.add('underline');

  personLinks.forEach(function(person) {
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
if (location.pathname === '/') {

  var zach = document.getElementById('zach'),
      icons = document.querySelectorAll('.nonagon .icons');

  zach.classList.add('display');

  icons.forEach(function(icon) {
    icon.addEventListener('mouseover', function () {
      var className = icon.classList[1],
          hoveredContainer = document.getElementById(className),
          blurbContainers = document.querySelectorAll('.blurb-container');

      if (document.querySelector('.icons.zach.at-start')) {
        document.querySelector('.icons.zach.at-start').classList.remove('at-start');
        zach.classList.remove('display');
      }

      blurbContainers.forEach(function(container) {
        container.classList.remove('display');
      });
      hoveredContainer.classList.add('display');
    });
  });

}
