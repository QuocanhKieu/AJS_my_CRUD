$(function () {
  $(window).on("scroll", function (e) {
    console.log(window);
    console.log(window.scrollY);
    if (window.scrollY > 300) {
      console.log("line 6");
      $(".containerParent.forHeader").addClass("toFixed");
    } else {
      $(".containerParent.forHeader").removeClass("toFixed");
    }
  });
});
