var slideIndex = 0;
function currentSlide(n) {
  var oldindex = slideIndex;
  slideIndex = n;
  console.log("previous index: " + oldindex + " current index: " + slideIndex);

  $(document).ready(function() {
    if (oldindex === slideIndex) {
      console.log("We have the same index");
    } else {
      if (oldindex < slideIndex) {
        console.log("MOving forward");
        var temp;
        temp = slideIndex * 100 - oldindex * 100;
        temp = temp + oldindex * 100;
        $("figure").css("left", -temp + "%");
        console.log("slideindex: " + slideIndex);
      }
      if (oldindex > slideIndex) {
        console.log("MOving backword");

        var temp;
        temp = oldindex * 100 - slideIndex * 100;
        console.log(temp);
        temp = oldindex * 100 - temp;
        console.log(temp);

        $("figure").css("left", -temp + "%");
        console.log("slideindex: " + slideIndex);
      }
    }
  });
}

$(document).ready(function() {
  var x = 0;
  // for next slide
  $(".btn-next").click(function() {
    var oldindex = slideIndex;

    slideIndex++;
    if (slideIndex > 4) {
      slideIndex = 0;
      $("figure").css("left", 0 + "%");
    } else {
      $("figure").css("left", -(oldindex * 100 + 100) + "%");
    }
    console.log(
      "previous index: " + oldindex + " current index: " + slideIndex
    );
  });
  // for prev slide
  $(".btn-prev").click(function() {
    var oldindex = slideIndex;

    slideIndex--;
    if (slideIndex < 0) {
      slideIndex = 4;
      $("figure").css("left", -400 + "%");
    } else {
      $("figure").css("left", -(oldindex * 100 - 100) + "%");
    }
    console.log(
      "previous index: " + oldindex + " current index: " + slideIndex
    );
  });
});
