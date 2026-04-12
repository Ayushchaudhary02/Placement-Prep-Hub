// ========== THEME MANAGEMENT ==========
export function initTheme() {
  try {
    // Load saved theme preference
    const savedTheme = localStorage.getItem('preppath_theme') || 'dark-mode';
    document.body.classList.toggle('light-mode', savedTheme === 'light-mode');

    // Create theme toggle button if not exists
    let themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) {
      themeToggle = document.createElement('button');
      themeToggle.id = 'theme-toggle';
      themeToggle.className = 'theme-toggle-btn';
      themeToggle.setAttribute('aria-label', 'Toggle dark/light mode');
      themeToggle.innerHTML = savedTheme === 'light-mode' ? '🌙' : '☀️';
      
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        const btnStart = navbar.querySelector('.btn-start');
        if (btnStart) {
          btnStart.parentElement.insertBefore(themeToggle, btnStart);
        } else {
          navbar.appendChild(themeToggle);
        }
      }
    }

    // Theme toggle event listener
    themeToggle.addEventListener('click', () => {
      const isLightMode = document.body.classList.toggle('light-mode');
      const newTheme = isLightMode ? 'light-mode' : 'dark-mode';
      localStorage.setItem('preppath_theme', newTheme);
      themeToggle.innerHTML = isLightMode ? '🌙' : '☀️';
      
      // Add transition effect
      document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
      setTimeout(() => {
        document.body.style.transition = '';
      }, 300);
    });

    // Add CSS for theme toggle button
    addThemeToggleStyles();
  } catch (error) {
    console.error('Error initializing theme:', error);
  }
}

function addThemeToggleStyles() {
  if (document.querySelector('#theme-toggle-styles')) return;

  const style = document.createElement('style');
  style.id = 'theme-toggle-styles';
  style.textContent = `
    .theme-toggle-btn {
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      padding: 0.5rem;
      transition: transform 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }

    .theme-toggle-btn:hover {
      transform: scale(1.2) rotate(20deg);
    }

    body.light-mode {
      background-color: #ffffff;
      color: #1a1a2e;
    }

    body.light-mode .navbar {
      background-color: #f8f9ff;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    body.light-mode .section-heading h2 {
      color: #1a1a2e;
    }

    body.light-mode .pillar-card,
    body.light-mode .track-card,
    body.light-mode .project-card {
      background-color: #f0f4ff;
      color: #1a1a2e;
    }

    body.light-mode .modal-content {
      background-color: #ffffff;
      color: #1a1a2e;
    }

    body.light-mode .toast {
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
    }
  `;
  document.head.appendChild(style);
}

// ========== SCROLL ANIMATIONS ==========
export function initScrollAnimations() {
  try {
    const observerOptions = {
      threshold: 0.6,
      rootMargin: '0px 0px -50px 0px'
    };

    const animationObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          // Stagger effect for multiple elements
          if (entry.target.parentElement?.querySelectorAll('.animate-in').length === 1) {
            entry.target.style.animationDelay = '0s';
          }
        }
      });
    }, observerOptions);

    // Observe all animatable elements
    const elementsToAnimate = document.querySelectorAll(
      '.pillar-card, .track-card, .project-card, section h2, .platform-card, .roadmap-month, .english-step'
    );

    elementsToAnimate.forEach((element, index) => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(30px)';
      element.style.transition = `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`;
      animationObserver.observe(element);
    });

    // Add animate-in styles
    addScrollAnimationStyles();
  } catch (error) {
    console.error('Error initializing scroll animations:', error);
  }
}

function addScrollAnimationStyles() {
  if (document.querySelector('#scroll-animation-styles')) return;

  const style = document.createElement('style');
  style.id = 'scroll-animation-styles';
  style.textContent = `
    @keyframes slideInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes slideInLeft {
      from {
        opacity: 0;
        transform: translateX(-30px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes slideInRight {
      from {
        opacity: 0;
        transform: translateX(30px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    .animate-in {
      animation: slideInUp 0.6s ease-out forwards !important;
    }

    .pillar-card.animate-in {
      animation: slideInUp 0.6s ease-out forwards !important;
    }

    .track-card.animate-in {
      animation: slideInUp 0.6s ease-out forwards !important;
    }

    .project-card.animate-in {
      animation: slideInUp 0.6s ease-out forwards !important;
    }

    section h2.animate-in {
      animation: slideInUp 0.6s ease-out forwards !important;
    }
  `;
  document.head.appendChild(style);
}

// ========== PROGRESS BAR ==========
export function initProgressBar() {
  try {
    // Create progress bar element
    let progressBar = document.getElementById('reading-progress');
    if (!progressBar) {
      progressBar = document.createElement('div');
      progressBar.id = 'reading-progress';
      progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #6C63FF, #FF6584, #43E8D8);
        width: 0%;
        z-index: 9999;
        transition: width 0.1s ease;
        box-shadow: 0 0 10px rgba(108, 99, 255, 0.5);
      `;
      document.body.insertBefore(progressBar, document.body.firstChild);
    }

    // Update progress on scroll
    const updateProgressBar = () => {
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / scrollHeight) * 100;
      progressBar.style.width = scrolled + '%';
    };

    window.addEventListener('scroll', updateProgressBar, { passive: true });
    updateProgressBar(); // Initial call
  } catch (error) {
    console.error('Error initializing progress bar:', error);
  }
}

// ========== MOBILE MENU ==========
export function initMobileMenu() {
  try {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    // Find or create hamburger button
    let hamburger = navbar.querySelector('.hamburger');
    if (!hamburger) {
      hamburger = document.createElement('button');
      hamburger.className = 'hamburger';
      hamburger.setAttribute('aria-label', 'Toggle navigation menu');
      hamburger.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
      `;
      navbar.appendChild(hamburger);
    }

    // Find or create nav links container
    let navLinks = navbar.querySelector('.nav-links');
    if (!navLinks) {
      navLinks = document.createElement('div');
      navLinks.className = 'nav-links';
      const navCenter = navbar.querySelector('.nav-center');
      if (navCenter) {
        navCenter.parentElement.insertBefore(navLinks, navCenter);
        navLinks.appendChild(navCenter);
      }
    }

    // Toggle menu on hamburger click
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('open');
    });

    // Close menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
      });
    });

    // Close menu on outside click
    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target) && navLinks.classList.contains('open')) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
      }
    });

    // Add mobile menu styles
    addMobileMenuStyles();
  } catch (error) {
    console.error('Error initializing mobile menu:', error);
  }
}

function addMobileMenuStyles() {
  if (document.querySelector('#mobile-menu-styles')) return;

  const style = document.createElement('style');
  style.id = 'mobile-menu-styles';
  style.textContent = `
    .nav-links {
      display: none;
      position: absolute;
      top: 70px;
      left: 0;
      right: 0;
      background: white;
      flex-direction: column;
      padding: 1rem;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }

    .nav-links.open {
      display: flex;
    }

    .nav-links .nav-center {
      flex-direction: column;
      gap: 1rem;
    }

    .hamburger {
      display: none;
      flex-direction: column;
      gap: 0.5rem;
      background: none;
      border: none;
      cursor: pointer;
    }

    .hamburger span {
      width: 25px;
      height: 3px;
      background: #1a1a2e;
      border-radius: 2px;
      transition: all 0.3s ease;
    }

    .hamburger.active span:nth-child(1) {
      transform: rotate(45deg) translate(8px, 8px);
    }

    .hamburger.active span:nth-child(2) {
      opacity: 0;
    }

    .hamburger.active span:nth-child(3) {
      transform: rotate(-45deg) translate(7px, -7px);
    }

    @media (max-width: 768px) {
      .hamburger {
        display: flex;
      }

      .nav-center {
        display: none;
      }

      .nav-links {
        display: none;
      }

      .nav-links.open {
        display: flex;
      }
    }
  `;
  document.head.appendChild(style);
}

// ========== TOAST NOTIFICATIONS ==========
export function showToast(message, type = 'info') {
  try {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    const typeColors = {
      success: { bg: '#43e97b', icon: '✓' },
      error: { bg: '#ff6584', icon: '✕' },
      info: { bg: '#6C63FF', icon: 'ℹ' },
      warning: { bg: '#FF9A3C', icon: '⚠' }
    };

    const colors = typeColors[type] || typeColors.info;

    toast.style.cssText = `
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      background: ${colors.bg};
      color: white;
      padding: 1.2rem 1.8rem;
      border-radius: 10px;
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
      z-index: 9998;
      animation: slideInRight 0.4s ease, slideOutRight 0.4s ease 2.6s forwards;
      font-weight: 600;
      font-size: 0.95rem;
      display: flex;
      align-items: center;
      gap: 0.8rem;
      max-width: 400px;
      word-wrap: break-word;
    `;

    toast.innerHTML = `<span style="font-size: 1.2rem;">${colors.icon}</span><span>${message}</span>`;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 3200);
  } catch (error) {
    console.error('Error showing toast:', error);
  }
}

// ========== ACTIVE NAV HIGHLIGHT ==========
export function initActiveNavHighlight() {
  try {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-center a[href^="#"]');

    const highlightNav = () => {
      let currentSection = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 200) {
          currentSection = section.getAttribute('id');
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
          link.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', highlightNav, { passive: true });
    highlightNav(); // Initial call
  } catch (error) {
    console.error('Error initializing active nav highlight:', error);
  }
}

// ========== TYPING EFFECT ==========
export function initTypingEffect() {
  try {
    const heroTitle = document.getElementById('hero-title');
    if (!heroTitle) return;

    // Wait for page load
    setTimeout(() => {
      const text = heroTitle.textContent;
      heroTitle.textContent = '';
      
      let index = 0;
      const typeCharacter = () => {
        if (index < text.length) {
          heroTitle.textContent += text[index];
          index++;
          setTimeout(typeCharacter, 50); // Speed of typing
        } else {
          // Add blinking cursor after typing completes
          addBlinkingCursor(heroTitle);
        }
      };

      // Start typing after delay
      setTimeout(typeCharacter, 300);
    }, 500);
  } catch (error) {
    console.error('Error initializing typing effect:', error);
  }
}

function addBlinkingCursor(element) {
  const cursor = document.createElement('span');
  cursor.className = 'typing-cursor';
  cursor.textContent = '|';
  cursor.style.cssText = `
    display: inline-block;
    margin-left: 2px;
    animation: cursorBlink 1s infinite;
    font-weight: bold;
  `;

  element.appendChild(cursor);
  addCursorAnimationStyle();
}

function addCursorAnimationStyle() {
  if (document.querySelector('#cursor-blink-styles')) return;

  const style = document.createElement('style');
  style.id = 'cursor-blink-styles';
  style.textContent = `
    @keyframes cursorBlink {
      0%, 49% {
        opacity: 1;
      }
      50%, 100% {
        opacity: 0;
      }
    }

    .typing-cursor {
      display: inline-block;
      margin-left: 2px;
      animation: cursorBlink 1s infinite;
      font-weight: bold;
      color: inherit;
    }
  `;
  document.head.appendChild(style);
}

// ========== INITIALIZATION ==========
export function initAllUI() {
  try {
    initTheme();
    initScrollAnimations();
    initProgressBar();
    initMobileMenu();
    initActiveNavHighlight();
    initTypingEffect();
  } catch (error) {
    console.error('Error initializing UI components:', error);
  }
}

// Auto-initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAllUI);
} else {
  initAllUI();
}
