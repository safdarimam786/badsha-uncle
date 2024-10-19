document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  // Navbar toggle functionality
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
  });

  // GSAP Animations
  // Animate navbar
  gsap.from('nav', {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
  });

  // Animate hero content
  gsap.from('.hero .container > *', {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out'
  });

  // Animate sections
  gsap.utils.toArray('section').forEach((section, i) => {
      gsap.from(section, {
          opacity: 0,
          y: 100,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              end: 'top 20%',
              toggleActions: 'play none none reverse'
          }
      });
  });

  // Animate list items
  gsap.utils.toArray('li').forEach((li, i) => {
      gsap.from(li, {
          opacity: 0,
          x: -50,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
              trigger: li,
              start: 'top 90%',
              toggleActions: 'play none none reverse'
          }
      });
  });

  // Animate blockquotes
  gsap.utils.toArray('blockquote').forEach((quote, i) => {
      gsap.from(quote, {
          opacity: 0,
          scale: 0.8,
          duration: 0.8,
          ease: 'back.out(1.7)',
          scrollTrigger: {
              trigger: quote,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
          }
      });
  });

  // Animate footer
  gsap.from('footer', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
          trigger: 'footer',
          start: 'top 90%',
          toggleActions: 'play none none reverse'
      }
  });
});

// Animate social icons
gsap.from('.social-icon', {
    opacity: 0,
    y: 20,
    duration: 0.5,
    stagger: 0.1,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: '.social-icons',
        start: 'top 90%',
        toggleActions: 'play none none reverse'
    }
});

// Animate service items
gsap.utils.toArray('.service-item').forEach((item, i) => {
    gsap.from(item, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });
});

// Animate contact form
gsap.from('.contact-form', {
    opacity: 0,
    x: 50,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
        trigger: '.contact-form',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    }
});
