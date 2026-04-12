// Import all initialization functions
import { initDSASection } from './dsa.js';
import { initMockInterview } from './interview.js';
import { initTheme, initScrollAnimations, initProgressBar, initMobileMenu, initActiveNavHighlight, initTypingEffect, showToast } from './ui.js';

// Main initialization function
function initializeApp() {
  try {
    // Initialize theme (light/dark mode)
    initTheme();

    // Initialize UI components
    initScrollAnimations();
    initProgressBar();
    initMobileMenu();
    initActiveNavHighlight();
    initTypingEffect();

    // Initialize feature sections
    initDSASection();
    initMockInterview();

    // Log successful initialization
    console.log('✓ PrepPath app initialized successfully');
  } catch (error) {
    console.error('Error initializing app:', error);
    showToast('Error loading some features. Please refresh the page.', 'error');
  }
}

// Wait for DOM to be fully loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  // DOM is already loaded (e.g., if script is deferred)
  initializeApp();
}

// Export for external use if needed
export { initializeApp };
