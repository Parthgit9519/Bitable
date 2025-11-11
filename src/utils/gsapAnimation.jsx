import { gsap } from "gsap";

export  const flyInCards = () => {
  const cards = gsap.utils.toArray(".feature-card");

  // Random starting position
  gsap.set(cards, {
    opacity: 0,
    x: () => gsap.utils.random(-300, 300),
    y: () => gsap.utils.random(-200, 200),
    rotation: () => gsap.utils.random(-45, 45),
    scale: 0.5,
  });

  // Animate into place
  gsap.to(cards, {
    opacity: 1,
    x: 0,
    y: 0,
    rotation: 0,
    scale: 1,
    ease: "back.out(1.7)",
    duration: 1.3,
    stagger: {
      each: 0.15,
      from: "random",
    },
    delay: 0.4,
  });
};
