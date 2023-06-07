document.addEventListener("DOMContentLoaded", function() {
    var elements = document.querySelectorAll(".recipe_text, .recipe_paraph, .recipe_under_text");
  
    function checkVisibility() {
      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var positionFromTop = element.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;
        if (positionFromTop - windowHeight <= 0 && !element.classList.contains("animate")) {
          element.style.opacity = "1";
          element.style.transform = "translateX(0)";
          element.classList.add("animate");
        }
      }
    }
  
    window.addEventListener("scroll", checkVisibility);
});
  