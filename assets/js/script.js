$(function(){

  $("a").click(function(event){
    if (this.hash !== "") {
    event.preventDefault();

    var scroll = this.hash;

    $('html, body').animate({
      scrollTop: $(scroll).offset().top
    }, 900, function(){
      window.location.hash = scroll;
    });
     }
   });
});

$(function () {
  $('[data-toggle="popover"]').popover();
})
