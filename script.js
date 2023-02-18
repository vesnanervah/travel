//background taking last div and footer at one time, it's just works...don't touch 
let doubleBcg = document.querySelector('.stories-footer-bcg');
let cards = document.querySelector('.stories-cards');
let footer = document.querySelector('footer');
let bcgCoordY =  cards.getBoundingClientRect().y+window.pageYOffset;
let bcgHeight = cards.offsetHeight+footer.offsetHeight;
doubleBcg.style.top = bcgCoordY+'px';
doubleBcg.style.height = bcgHeight+'px';
//
