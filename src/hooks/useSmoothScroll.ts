import { useLayoutEffect } from "react";

import LocomotiveScroll from "locomotive-scroll";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const useLocoScroll = (start: boolean) => {
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    if (!start) return;

    const scrollEl = document.querySelector(
      ".main-content-wrapper"
    )! as HTMLDivElement;

    let locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1,
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(scrollEl, {
      scrollTop(value: any) {
        if (locoScroll) {
          return arguments.length
            ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true })
            : //@ts-ignore
              locoScroll.scroll.instance.scroll.y;
        }
        return null;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: scrollEl.style.transform ? "transform" : "fixed",
    });

    const lsUpdate = () => {
      if (locoScroll) {
        locoScroll.update();
      }
    };

    ScrollTrigger.defaults({ scroller: scrollEl });

    ScrollTrigger.addEventListener("refresh", lsUpdate);
    //ScrollTrigger.refresh();

    console.log("Loco-scroll initiated.");

    return () => {
      locoScroll.destroy();
      ScrollTrigger.removeEventListener("refresh", lsUpdate);
    };
  }, [start]);
};

export default useLocoScroll;
