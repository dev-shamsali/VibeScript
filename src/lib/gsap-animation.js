"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* -------------------------------------------
   GSAP Plugin Registration (Client-safe)
-------------------------------------------- */
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* -------------------------------------------
   GLOBAL DEFAULTS (Premium Feel)
-------------------------------------------- */
gsap.defaults({
  ease: "power3.out",
  duration: 1.1,
});

/* -------------------------------------------
   HERO INTRO ANIMATION (Boom Effect)
-------------------------------------------- */
export const animateHero = (scope) => {
  return gsap.context(() => {
    const tl = gsap.timeline();

    tl.from(".hero-title", {
      y: 120,
      opacity: 0,
      stagger: 0.15,
      ease: "power4.out",
    })
      .from(
        ".hero-subtitle",
        {
          y: 60,
          opacity: 0,
        },
        "-=0.4"
      )
      .from(
        ".hero-cta",
        {
          scale: 0.85,
          opacity: 0,
          ease: "back.out(1.6)",
        },
        "-=0.3"
      );
  }, scope);
};

/* -------------------------------------------
   SECTION FADE + SLIDE (Standard Sections)
-------------------------------------------- */
export const animateSection = (selector, scope) => {
  return gsap.context(() => {
    gsap.from(selector, {
      scrollTrigger: {
        trigger: selector,
        start: "top 80%",
        once: true,
      },
      y: 80,
      opacity: 0,
      stagger: 0.18,
      ease: "power3.out",
    });
  }, scope);
};

/* -------------------------------------------
   CARD STAGGER (Projects, Services, Features)
-------------------------------------------- */
export const animateCards = (selector, scope) => {
  return gsap.context(() => {
    gsap.from(selector, {
      scrollTrigger: {
        trigger: selector,
        start: "top 85%",
        once: true,
      },
      y: 70,
      opacity: 0,
      stagger: 0.15,
      ease: "power3.out",
    });
  }, scope);
};

/* -------------------------------------------
   PARALLAX FLOAT (Safe & Smooth)
-------------------------------------------- */
export const parallaxEffect = (selector, scope, distance = 60) => {
  return gsap.context(() => {
    gsap.fromTo(
      selector,
      { y: -distance },
      {
        y: distance,
        scrollTrigger: {
          trigger: selector,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.6,
        },
        ease: "none",
      }
    );
  }, scope);
};

/* -------------------------------------------
   SIMPLE FADE UP (Headings / Text)
-------------------------------------------- */
export const fadeInUp = (selector, scope, delay = 0) => {
  return gsap.context(() => {
    gsap.from(selector, {
      y: 60,
      opacity: 0,
      delay,
      ease: "power4.out",
    });
  }, scope);
};

/* -------------------------------------------
   STAGGER TEXT / LIST ITEMS
-------------------------------------------- */
export const staggerFadeIn = (
  selector,
  scope,
  staggerAmount = 0.12
) => {
  return gsap.context(() => {
    gsap.from(selector, {
      opacity: 0,
      y: 40,
      stagger: staggerAmount,
      ease: "power3.out",
    });
  }, scope);
};
