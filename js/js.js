$(document).ready( ()=>{  
  function showModal() {
    $('.overlay').animate({opacity: 'show'}, 1800);
    $('.modal').css({top: (-5*$(this).outerHeight())+'px'}).show().animate({top: ''}, 800);
    $('.close').focus();
  }
  
  function hideModal(){
    $('.modal').animate({top: (-5*$(this).outerHeight())+'px'}, 800, ()=>{$('.modal').hide();});
    $('.overlay').animate({opacity: 'hide'}, 1800);
  }


  $('nav a[href="#sheldure"], .main_btna, .main_btn').on('click', showModal );
  
  $('.close').on('click', hideModal);
  $('.modal').on('keydown', evt=>{
    if (evt.keyCode === 27){ 
      hideModal();
    }
  });
  
  $('.back').on('click', function (){$(this.parentNode).hide();});
  $('.thanks').on('keydown', function(evt){
    if (evt.keyCode === 27){  
      $('.thanks').hide();
    }
  });
   

  $('.form').on('submit', (evt)=>{
    evt.preventDefault();
    
    
    let formData = {};
    [].forEach.call($('.form input'), el=>{ formData[el.name] = el.value; });
    let tmp = $('.form textarea')[0];
    formData[tmp.name] = tmp.value ;
  
    formData = JSON.stringify(formData);
    console.log(formData);
    
    function onPostSuccess() {
      hideModal();
      $('.thanks').show();
    }
    
    $.post('server.php', formData, onPostSuccess(), 'json');
    
  });
});