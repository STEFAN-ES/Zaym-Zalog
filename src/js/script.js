var callModal   = $('.modalCall');
var closemodal  = $('.popup-close');
var overlay     = document.querySelector('.overlay');
var popup       = document.querySelector('.popup');
var thanks      = document.querySelector('.popup-thanks')
var pSubtitle   = document.querySelector('.popup-text__subtitle');
var pTxt        = document.createTextNode('и оформите свой займ в течении 15 минут');
var sTxt        = document.createTextNode('и узнайте сумму одобенного кредита в течении 15 минут');

function modal(){
  overlay.style.display = 'flex';
  popup.style.display   = 'block';
  thanks.style.display  = 'none';
  pSubtitle.appendChild(pTxt);
};
function Smodal(){
  overlay.style.display = 'flex';
  popup.style.display   = 'block';
  thanks.style.display  = 'none';
  pSubtitle.appendChild(sTxt);
};

function modalclose(){
  overlay.style.display = 'none';
  popup.style.display   = 'none';
  $('.popup-text__subtitle').empty();
};

function thank(){
  popup.style.display   = 'none';
  overlay.style.display = 'flex';
  thanks.style.display  = 'flex';
};

closemodal.on('click', modalclose);
callModal.on('click', modal);
$('.modalCalls').on('click', Smodal)



$( "#number-slider" ).slider({
    animate: "slow",
    range: "min",    
    value: 0.3,
    min: 0.3,
    step: 0.1,
    max: 30.1,
    slide : function(event, ui) {
    	  var valueSl = ui.value;
    	  if(ui.value > 30){
    	  	valueSl = 30;
    	  }
          $("#send-result-polzunok").val(valueSl);
          $(".sumMoney").text(valueSl +" млн. руб.");
          activMoney = valueSl;
          summFinal ( activMoney , activYears);
      }
});
$("#send-result-polzunok").val($("#number-slider").slider("value"));
$(".sumMoney").text($("#number-slider").slider("value")+" млн. руб.");


$( "#year-slider" ).slider({
    animate: "slow",
    range: "min",    
    value: 1,
    min: 1,
    step: 1,
    max: 20,
    slide : function(event, ui) {
    		 var textYear = ' год.';
    		 if(ui.value === 1){
    		 	textYear = ' год.';
    		 }else if(ui.value > 1 && ui.value < 5){
    		 	textYear = ' года.';
    		 }else {
    		 	textYear = ' лет.';
    		 }
          $("#send-result-year").val(ui.value);
          $(".sumYear").text(ui.value + textYear);
          activYears = ui.value;
          summFinal ( activMoney , activYears);
      }
});
$("#send-result-year").val($("#year-slider").slider("value"));
$(".sumYear").text($("#year-slider").slider("value")+" год.");

var _S = $("#number-slider").slider("value");
var _P = 0.02;
var _n = $("#year-slider").slider("value");
var formula = _S*( _P + (_P/ (Math.pow((1 + _P), _n*12) - 1)));
var formula = Math.floor(formula * 1000000);
var outputn = String(formula).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');

$('.calc-output__num').text(outputn);

var activMoney = $("#number-slider").slider("value") ;
var activYears = $("#year-slider").slider("value");
function summFinal ( money , years){
	_P = 0.02;
	var formulaFinal = money *( _P + (_P/ ((Math.pow((1 + _P), years*12)) - 1)));
  var formulaFinal = Math.floor(formulaFinal * 1000000);
  var output = String(formulaFinal).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
  $('.calc-output__num').text(output);
}





$('.partners-slider').slick({
  speed: 400,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,

      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        autoplay: true,
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        dots: true
      }
    }
  ]
});



$('form').submit(function(event) {

      event.preventDefault();

      var action = "mailer/smart.php";
      var msg = $(this).serialize();
      var formThis = $(this);

      $.ajax({
          type: "POST",
          url: action,
          data: msg,
          success: function(data) {
              thank();

              $('form').trigger('reset');
          },
          error: function(xhr, str) {

              alert('Произошла ошибка, попробуйте немного позже');
          }
      });
  });

  $(".input-phone").mask("9 (999) 999-99-99");