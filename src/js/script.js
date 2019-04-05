var callModal   = $('.modalCall');
var closemodal  = $('.popup-close');
var overlay     = document.querySelector('.overlay');
var popup       = document.querySelector('.popup');
var thanks      = document.querySelector('.popup-thanks')
var pSubtitle   = document.querySelector('.popup-text__subtitle');
var pTxt        = document.createTextNode('и оформите свой займ в течении 15 минут');

function modal(){
  overlay.style.display = 'flex';
  popup.style.display   = 'block';
  thanks.style.display  = 'none';
  pSubtitle.appendChild(pTxt);
};

function modalclose(){
  overlay.style.display = 'none';
  popup.style.display   = 'none';
};

closemodal.on('click', modalclose);
callModal.on('click', modal);