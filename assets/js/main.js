// Main JavaScript functionality - Vanilla JS (no jQuery)
(function () {

  // Play initial animations on page load
  window.addEventListener("load", function () {
    setTimeout(function () {
      document.body.classList.remove("is-preload");
    }, 100);
  });

  // Smooth scrolling for internal links
  function initSmoothScrolling() {
    // Handle all internal anchor links (href="#something")
    const internalLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
    
    internalLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        const targetId = href.substring(1); // Remove the #
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          e.preventDefault();
          // Smooth scroll to target
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

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

  // Hover videos for project cards (play on hover, reset when the pointer leaves)
  function initHoverVideos() {
    const cards = document.querySelectorAll('.gif-container');

    cards.forEach(card => {
      const video = card.querySelector('video.animated-gif');
      if (!video) return;

      card.addEventListener('mouseenter', function() {
        video.play().catch(function() {});
      });

      card.addEventListener('mouseleave', function() {
        video.pause();
        video.currentTime = 0;
      });
    });
  }

  // Initialize everything when DOM is ready
  document.addEventListener('DOMContentLoaded', function() {
    initSmoothScrolling();
    initSkeletonLoading();
    initHoverVideos();
  });
})();
