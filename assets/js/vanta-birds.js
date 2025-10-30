// Vanta.js Birds Effect for Get in Touch section
document.addEventListener("DOMContentLoaded", function () {
  // Initialize Vanta Birds effect
  VANTA.BIRDS({
    // DOM element selector where the effect will be applied
    el: "#contact-birds",

    // INTERACTION CONTROLS
    mouseControls: true, // Enable mouse interaction with birds (they react to cursor movement)
    touchControls: true, // Enable touch interaction on mobile devices
    gyroControls: false, // Disable device gyroscope controls (can cause motion sickness)

    // RESPONSIVE SIZING
    minHeight: 200.0, // Minimum height (px) for the effect to render
    minWidth: 200.0, // Minimum width (px) for the effect to render
    scale: 1.0, // Overall scale of the effect on desktop (1.0 = normal size)
    scaleMobile: 1.0, // Overall scale of the effect on mobile devices

    // COLOR SCHEME - Blue-jade palette
    backgroundColor: 0xffffff, // Background color (0x0 = transparent/black)
    color1: 0x2a6665, // Primary bird color (darker jade-green color)
    color2: 0x4a87d3, // Secondary bird color (deeper blue from your palette)
    colorMode: "variance", // How colors are applied: "variance" creates color variation between birds

    // TRANSPARENCY CONTROLS
    backgroundAlpha: 0.0, // Background transparency (0.0 = fully transparent, 1.0 = opaque)

    // BIRD APPEARANCE
    birdSize: 1.5, // Size of individual birds (1.0 = default size)
    wingSpan: 25.0, // Wing span of the birds (affects how wide the wings appear)

    // MOVEMENT BEHAVIOR
    speedLimit: 5.0, // Maximum speed birds can fly (higher = faster movement)
    separation: 20.0, // How much birds avoid crowding each other (higher = more spread out)
    alignment: 20.0, // How much birds align their direction with nearby birds (flocking behavior)
    cohesion: 20.0, // How much birds are attracted to the center of nearby birds (grouping tendency)
    quantity: 3.0, // Number of birds in the flock (higher = more birds, but impacts performance)
  });
});
