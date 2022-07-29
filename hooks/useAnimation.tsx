import { useEffect, MutableRefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

interface IProps {
  type: string;
  refObject: MutableRefObject<any>;
}

export default function useAnimation({ type, refObject }: IProps) {
  gsap.registerPlugin(ScrollTrigger);

  const animations = {
    slideUp: (target) =>
      gsap.fromTo(
        target,
        {
          autoAlpha: 0,
          y: 100,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.25,
          scrollTrigger: {
            trigger: target,
            start: "top bottom",
            toggleActions: "restart reset restart reset", // good examples here: https://codepen.io/GreenSock/pen/LYVKWGo
          },
        }
      ),
    popUp: (target) =>
      gsap.fromTo(
        target,
        {
          autoAlpha: 0,
          transformOrigin: "center center",
        },
        {
          delay: 0.25,
          duration: 0.5,
          autoAlpha: 1,
          scrollTrigger: {
            trigger: target,
            start: "top bottom",
            toggleActions: "restart reset restart reset",
          },
        }
      ),
    bulkShowUp: (target) =>
      gsap.to(target, {
        autoAlpha: 1,
        duration: 1,
        stagger: 0.25,
        scrollTrigger: {
          trigger: target,
          start: "top center",
          toggleActions: "restart none none none", // good examples here: https://codepen.io/GreenSock/pen/LYVKWGo
        },
      }),
    bulkSlideFromRight: (target) =>
      gsap.from(target, {
        duration: 1,
        opacity: 0,
        x: 100,
        stagger: 0.25,
      }),
    rotate: (target) =>
      gsap.from(target, {
        rotate: 360,
        repeat: -1,
        duration: 60,
        ease: "power2",
      }),
    infiniteSlideDown: (target) =>
      gsap.from(target, {
        y: "-100",
        opacity: 0.5,
        duration: 3,
        repeat: -1,
      }),
  };

  // observe changing height of document.body to refresh scroll trigger postioning
  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      ScrollTrigger.refresh();
    });
    resizeObserver.observe(document.body);
  }, []);

  useEffect(() => {
    const target = Array.isArray(refObject.current)
      ? refObject.current.map((item) => item.current)
      : refObject.current;

    animations[type](target);
  }, []);
}
