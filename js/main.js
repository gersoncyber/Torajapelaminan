function sendMail(params){
var temParams ={
  from_name:document.getElementById("fromName").value,
  to_name:document.getElementById("toName").value,
  message:document.getElementById("msg").value,
};
emailjs.send('gmail89','template_umjxan7', temParams)
.then(function(res){
  console.log('success', res.status);
})
}



$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $(".navbar").toggleClass("nav-toggle");
  });

  $(window).on("load scroll", function () {
    $("#menu").removeClass("fa-times");
    $(".navbar").removeClass("nav-toggle");

    $("section").each(function () {
      let top = $(window).scrollTop();
      let height = $(this).height();
      let offset = $(this).offset().top - 200;
      let id = $(this).attr("id");

      if (top > offset && top < offset + height) {
        $(".navbar ul li a").removeClass("active");
        $("navbar").find(`[href="#${id}"]`).addClass("active");
      }


    });
  });
});
