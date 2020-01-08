$(function(){
  $("nav a").click(function(evento){
     if (this.hash !== ""){
       event.preventDefault();

       var pio = this.hash;

       $('html, body').animate({
         scrollTop: $(pio).offset().top
       }, 800, function(){
         window.location.hash= pio;
     });
   }
 });
 $('[data-toggle="popover"]').popover();
});
