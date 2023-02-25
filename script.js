//background taking last div and footer at one time, it's just works...don't touch 
let doubleBcg = document.querySelector('.stories-footer-bcg');
let cards = document.querySelector('.stories-cards');
let footer = document.querySelector('footer');
let bcgCoordY =  cards.getBoundingClientRect().y+window.pageYOffset;
let bcgHeight = cards.offsetHeight+footer.offsetHeight;
doubleBcg.style.top = bcgCoordY+'px';
doubleBcg.style.height = bcgHeight+'px';
//

//burger and hidden mobile menu
let burger = document.querySelector('.burger');
let hiddenMenu = document.querySelector('.mobile-hidden-menu');
let closeMenuBtn = document.querySelector('.close-menu');
burger.addEventListener('click', function(e){
    hiddenMenu.classList.toggle('menu-is-open');
})
closeMenuBtn.onclick = function(e){
    hiddenMenu.classList.toggle('menu-is-open');
}
//

//carousel on >768p res
let bigCarousel = document.querySelector('.img-list');
let bigCarouselBtns = document.querySelectorAll('.carousel-btn');

function changeBigCarouselPos(newActiveBtn){
    bigCarouselBtns.forEach(function(btn){
        if(btn.classList.contains('active-carousel-btn')){
            btn.classList.remove('active-carousel-btn');
        }
    })
    newActiveBtn.classList.add('active-carousel-btn');
    if(newActiveBtn.classList.contains('btnMiddle')){
        bigCarousel.style.left = '0px';
    }
    if(newActiveBtn.classList.contains('btnLeft')){
        bigCarousel.style.left = '54%';
    }
    if(newActiveBtn.classList.contains('btnRight')){
        bigCarousel.style.left = '-54%';
    }
}

bigCarouselBtns.forEach(function(btn){
    btn.onclick = function(e){
        changeBigCarouselPos(btn);
    }
})
//

//carousel on <768p res
let mobileCarousel = document.querySelector('.mobile-carousel-images');
let imagesList = document.querySelector('.mobile-img-list');
let prevBtn = document.querySelector('.mobile-prev-btn');
let nextBtn = document.querySelector('.mobile-next-btn');
let carouselElems = document.querySelectorAll('.mobile-carousel-elem')
let mobileCarouselPos = 0;
let maxPos = carouselElems[0].offsetWidth* (carouselElems.length-1);

function makeMovement(dir){
    if(dir == 'right' && mobileCarouselPos<maxPos){
        mobileCarouselPos += carouselElems[0].offsetWidth;
    }
    if(dir == 'left' && mobileCarouselPos > 0){
        mobileCarouselPos -= carouselElems[0].offsetWidth;
    }
    imagesList.style.right = mobileCarouselPos+'px';
    changeActive();
}
function changeActive(){
    if(mobileCarouselPos>0 && mobileCarouselPos<maxPos){
        prevBtn.classList.remove('inactive-mob-btn');
        nextBtn.classList.remove('inactive-mob-btn');
    }
    if(mobileCarouselPos==0){
        prevBtn.classList.add('inactive-mob-btn');
    }
    if(mobileCarouselPos==maxPos){
        nextBtn.classList.add('inactive-mob-btn');
    }
}

nextBtn.onclick = function(e){
    makeMovement('right');
}
prevBtn.onclick = function(e){
    makeMovement('left');
}

//login popup
let loginPopup = document.querySelector('.login-popup');
let regModeBtn = document.querySelector('.reg-pup-enter');
let logModeBtn = document.querySelector('.log-pup-enter');
let loginHidingOptions = document.querySelector('.login-options-other');
let popupHeader = document.querySelector('.popup-header p');
let loginFooter = document.querySelector('.log-in-footer-text');
let registerFooter = document.querySelector('.register-footer-text');
let passRecoverBtn = document.querySelector('.forgot-pass');
let openPopupBtn = document.querySelector('.login-btn');
let blackBcg = document.querySelector('.black-background');
let loginMobileBtn = document.querySelector('.login-mobile-btn');
let signInBtn = document.querySelector('.sign-in-btn');

function showPopup(){
    loginPopup.style.left = window.innerWidth/2 - loginPopup.offsetWidth/2 + 'px';
    loginPopup.style.top = window.innerHeight/2-loginPopup.offsetHeight/2 + 'px';
    blackBcg.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}
function hidePopup(){
    loginPopup.style.top = `-${window.innerHeight/2+loginPopup.offsetHeight/2}px`;
    blackBcg.classList.add('hidden');
    document.body.style.overflow = 'auto';
}
function alertUserInut(){
    let typedMail = document.querySelector('.mail-input').value;
    let typedPassword = document.querySelector('.password-input').value;
    alert(`Mail: ${typedMail} Password: ${typedPassword}`);
}

hidePopup();
regModeBtn.onclick = function(e){
  loginHidingOptions.classList.add('hidden');
  loginFooter.classList.add('hidden');
  registerFooter.classList.remove('hidden');
  popupHeader.textContent = `Create account`;
  passRecoverBtn.classList.add('hidden');
}
logModeBtn.onclick = function(e){
  registerFooter.classList.add('hidden');
  loginHidingOptions.classList.remove('hidden');
  loginFooter.classList.remove('hidden');
  passRecoverBtn.classList.remove('hidden');
  popupHeader.textContent = `Log in to your account`;
}
openPopupBtn.onclick = function(){
    showPopup();
}
loginMobileBtn.onclick = function(){
    showPopup();
}
blackBcg.onclick = function(){
    hidePopup();
}
signInBtn.onclick = function(){
    alertUserInut();
}
//