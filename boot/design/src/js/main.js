$(function(){
  $("#botao").on("click", function(event) {
    $(this).toggleClass("active");
  });
  $("#linguagem").on("mouseenter", function(event) {
    // alert("entrou");
    // $(this).toggleClass("open");
    // $(".dropdown-toggle").dropdown();
    $("#teste").addClass("show");
  });
  $("#linguagem").on("mouseleave", function(event) {
    // alert("saiu");
    // $(this).toggleClass("open");
    // $(".dropdown-toggle").dropdown();
    $("#teste").removeClass("show");
  });
});
 
