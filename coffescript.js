  /* Button to scroll to the top */
  document.addEventListener("DOMContentLoaded", function() {
    var scrollButton = document.getElementById("scrollButton");

    window.onscroll = function() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.display = "block";
      } else {
        scrollButton.style.display = "none";
      }
    };

    scrollButton.onclick = function() {
      scrollToTop();
    };

    function scrollToTop() {
      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

      if (currentScroll > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, currentScroll - currentScroll / 8);
      }
    }
  });
  /* ------------------- */

  /* Main section scroll */
  function scrollToSection(event, sectionId) {
    var targetSection = document.getElementById(sectionId);
  
    if (targetSection) {
      event.preventDefault();
      var offset = 75; 
      window.scrollTo({
        top: targetSection.offsetTop - offset,
        behavior: 'smooth'
      });
    }
  }
  /* ------------------- */

  /* nav-container fiksacija */
  document.addEventListener("DOMContentLoaded", function() {
    var navContainer = document.querySelector('.nav-container');
    var header = document.querySelector('.header');
    var headerHeight = header.offsetHeight;
  
    window.onscroll = function() {
      var scrollPosition = document.body.scrollTop || document.documentElement.scrollTop;
  
      if (scrollPosition > headerHeight) {
        navContainer.style.position = 'fixed';
        document.body.style.paddingTop = navContainer.offsetHeight + 'px';
      } else {
        navContainer.style.position = 'static';
        document.body.style.paddingTop = '0';
      }
    };
  });
  /* ------------------- */