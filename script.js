// Part 2: JavaScript Functions

// Global variable to track animation state
let isAnimating = false;

/**
 * Toggles animation class on an element.
 * Demonstrates local scope (element param), and global scope (isAnimating).
 * @param {HTMLElement} element - The element to animate.
 * @param {string} animationClass - The CSS class to add/remove for animation.
 * @returns {boolean} - New animation state.
 */
function toggleAnimation(element, animationClass) {
  if (!isAnimating) {
    element.classList.add(animationClass);
    isAnimating = true;
  } else {
    element.classList.remove(animationClass);
    isAnimating = false;
  }
  return isAnimating;
}

/**
 * Creates a message string to display current animation state.
 * @param {boolean} state - Whether animation is active.
 * @returns {string} - Message to display.
 */
function createMessage(state) {
  return state ? "Animation is running!" : "Animation stopped.";
}

// Part 3: Combining CSS Animations with JS

// Select elements
const animateBtn = document.getElementById('animateBtn');
const animateBox = document.getElementById('animateBox');
const output = document.getElementById('output');

// Event listener for button click to toggle animation on box
animateBtn.addEventListener('click', () => {
  const newState = toggleAnimation(animateBox, 'bounce-in');
  output.textContent = createMessage(newState);
});
