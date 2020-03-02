// ********** Fonctionnalité 1:

var footerTag = document.getElementsByTagName('footer')[0];
console.log(footerTag);
footerTag.addEventListener('click',function(){ console.log('clique')
  });



// ********** Fonctionnalité 1-bis:

var footerTag = document.getElementsByTagName('footer')[0];
console.log(footerTag);
var count = 1
footerTag.addEventListener('click',function(){ console.log(`clic numéro ${count}`) ; count +=1});



// ********** Fonctionnalité 2:

var hamburger = document.querySelector('.navbar-toggler')
console.log(hamburger)
hamburger.addEventListener('click', function (){ var navbarHeader = document.getElementById('navbarHeader') ; navbarHeader.classList.toggle('collapse')});
console.log(navbarHeader)



// ********** Fonctionnalité 3:

var firstCard = document.getElementsByClassName('card mb-4 box-shadow')[0];
var firstEditBtn = document.getElementsByClassName('btn btn-sm btn-outline-secondary')[0];
console.log(firstCard);
console.log(firstEditBtn);
firstEditBtn.addEventListener('click', function() {firstCard.style.color = 'red'});


// ********** Fonctionnalité 4:

var secondCard = document.getElementsByClassName('card mb-4 box-shadow')[1];
var secondEditBtn = document.getElementsByClassName('btn btn-sm btn-outline-secondary')[1];
console.log(secondCard);
console.log(secondEditBtn);
var thirdCard = document.getElementsByClassName('card mb-4 box-shadow')[2];
secondEditBtn.addEventListener('click', function() {
  if (secondCard.style.color === 'green') {
    secondCard.style.color = thirdCard.style.color;
  } else {
    secondCard.style.color = 'green';
  }});



// ********** Fonctionnalité 5:

let navBar = document.getElementsByTagName('header')[0];
console.log(navBar)
var linkBootstrap = document.getElementsByTagName('link')[0];
navBar.addEventListener('dblclick', function(linkBootstrap) { linkBootstrap.preventDefault;} 
);

