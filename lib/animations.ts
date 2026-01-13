import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Fade in animation for elements on scroll
 */
export const fadeInUp = (element: HTMLElement | null, delay = 0) => {
  if (!element) return;

  gsap.fromTo(
    element,
    {
      opacity: 0,
      y: 30,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    }
  );
};

/**
 * Staggered animation for multiple elements
 */
export const staggerFadeInUp = (
  elements: NodeListOf<Element> | Element[],
  stagger = 0.1,
  delay = 0
) => {
  gsap.fromTo(
    elements,
    {
      opacity: 0,
      y: 30,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger,
      delay,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: elements[0],
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    }
  );
};

/**
 * Scale animation on scroll
 */
export const scaleInOnScroll = (element: HTMLElement | null, delay = 0) => {
  if (!element) return;

  gsap.fromTo(
    element,
    {
      opacity: 0,
      scale: 0.8,
    },
    {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      delay,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    }
  );
};

/**
 * Rotate and fade animation
 */
export const rotateInOnScroll = (element: HTMLElement | null, delay = 0) => {
  if (!element) return;

  gsap.fromTo(
    element,
    {
      opacity: 0,
      rotation: -20,
      scale: 0.8,
    },
    {
      opacity: 1,
      rotation: 0,
      scale: 1,
      duration: 0.8,
      delay,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    }
  );
};

/**
 * Parallax effect on scroll
 */
export const parallax = (element: HTMLElement | null, speed = 0.5) => {
  if (!element) return;

  gsap.to(element, {
    y: () => window.innerHeight * speed,
    scrollTrigger: {
      trigger: element,
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
      markers: false,
    },
  });
};

/**
 * Text reveal animation
 */
export const textReveal = (element: HTMLElement | null, delay = 0) => {
  if (!element) return;

  // Split text into spans for letter animation
  const text = element.textContent || '';
  const spans = text.split('').map((char) => {
    const span = document.createElement('span');
    span.textContent = char;
    span.style.display = 'inline-block';
    span.style.opacity = '0';
    return span;
  });

  element.innerHTML = '';
  spans.forEach((span) => element.appendChild(span));

  gsap.to(spans, {
    opacity: 1,
    y: 0,
    duration: 0.05,
    stagger: 0.05,
    delay,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  });
};

/**
 * Slide in from left
 */
export const slideInLeft = (element: HTMLElement | null, delay = 0) => {
  if (!element) return;

  gsap.fromTo(
    element,
    {
      opacity: 0,
      x: -100,
    },
    {
      opacity: 1,
      x: 0,
      duration: 0.8,
      delay,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    }
  );
};

/**
 * Slide in from right
 */
export const slideInRight = (element: HTMLElement | null, delay = 0) => {
  if (!element) return;

  gsap.fromTo(
    element,
    {
      opacity: 0,
      x: 100,
    },
    {
      opacity: 1,
      x: 0,
      duration: 0.8,
      delay,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    }
  );
};

/**
 * Count up animation
 */
export const countUp = (
  element: HTMLElement | null,
  start: number,
  end: number,
  duration = 2
) => {
  if (!element) return;

  const counter = { value: start };

  gsap.to(counter, {
    value: end,
    duration,
    ease: 'power2.out',
    onUpdate: () => {
      element.textContent = Math.floor(counter.value).toString();
    },
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  });
};

/**
 * Pin element during scroll
 */
export const pinElement = (
  element: HTMLElement | null,
  duration = 300
) => {
  if (!element) return;

  gsap.to(element, {
    scrollTrigger: {
      trigger: element,
      pin: true,
      pinSpacing: false,
      start: 'top top',
      end: `+=${duration}`,
      scrub: 1,
      markers: false,
    },
  });
};

/**
 * Blur scroll effect
 */
export const blurOnScroll = (element: HTMLElement | null) => {
  if (!element) return;

  gsap.to(element, {
    filter: 'blur(10px)',
    opacity: 0.5,
    scrollTrigger: {
      trigger: element,
      start: 'top center',
      end: 'bottom center',
      scrub: 1,
      markers: false,
    },
  });
};

/**
 * Rotate on scroll
 */
export const rotateOnScroll = (element: HTMLElement | null, rotation = 360) => {
  if (!element) return;

  gsap.to(element, {
    rotation,
    scrollTrigger: {
      trigger: element,
      start: 'top center',
      end: 'bottom center',
      scrub: 1,
      markers: false,
    },
  });
};
