(function ($) {
  var $window = $(window),
    $body = $("body");

  // Breakpoints.
  breakpoints({
    xlarge: ["1141px", "1680px"],
    large: ["981px", "1140px"],
    medium: ["737px", "980px"],
    small: ["481px", "736px"],
    xsmall: ["321px", "480px"],
    xxsmall: [null, "320px"],
  });

  // Play initial animations on page load.
  $window.on("load", function () {
    window.setTimeout(function () {
      $body.removeClass("is-preload");
    }, 100);
  });

  // Scrolly.
  $(".scrolly").scrolly();

  // Skeleton Loading for Images
  function initSkeletonLoading() {
    const images = document.querySelectorAll('.lazy-image');
    
    images.forEach(img => {
      const wrapper = img.closest('.image-wrapper');
      if (!wrapper) return;
      
      const skeleton = wrapper.querySelector('.image-skeleton');
      
      if (img.complete && img.naturalHeight !== 0) {
        // Image is already loaded
        img.classList.add('loaded');
        if (skeleton) skeleton.classList.add('hidden');
      } else {
        // Image is still loading
        img.addEventListener('load', function() {
          img.classList.add('loaded');
          if (skeleton) skeleton.classList.add('hidden');
        });
        
        img.addEventListener('error', function() {
          // Handle error case - still hide skeleton
          img.classList.add('loaded');
          if (skeleton) skeleton.classList.add('hidden');
        });
      }
    });
  }

  // Initialize skeleton loading when DOM is ready
  $(document).ready(function() {
    initSkeletonLoading();
  });
})(jQuery);
