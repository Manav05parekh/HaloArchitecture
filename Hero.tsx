import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Hero.css";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  const fgRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 🔁 GSAP Scroll Parallax
    if (bgRef.current) {
      gsap.to(bgRef.current, {
        y: 100,
        scale: 1.1,
        ease: "none",
        scrollTrigger: {
          trigger: bgRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    if (fgRef.current) {
      gsap.to(fgRef.current, {
        y: 150,
        ease: "none",
        scrollTrigger: {
          trigger: fgRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    if (subtitleRef.current) {
      gsap.to(subtitleRef.current, {
        y: 80,
        ease: "none",
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: "top center",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    // 🌀 3D Tilt on mousemove
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 30;
      const y = (e.clientY / innerHeight - 0.5) * 30;

      gsap.to(titleRef.current, {
        rotateY: x,
        rotateX: -y,
        transformPerspective: 800,
        ease: "power2.out",
        duration: 0.4,
      });

      gsap.to(subtitleRef.current, {
        scale: 1.02,
        ease: "power1.out",
        duration: 0.3,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // 💥 Entry Animation
    gsap.fromTo(
      heroContentRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.3 }
    );

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <><section className="hero-section">
      <div className="hero-bg-layer hero-bg" ref={bgRef}></div>
      <div className="hero-bg-layer hero-fg" ref={fgRef}></div>
      <div className="hero-content" ref={heroContentRef}>
        <div className="hero-title" ref={titleRef}>
          HALO Architects
        </div>
        <p className="hero-subtitle" ref={subtitleRef}>
          Designing Tomorrow. Sustainably.
        </p>
      </div>
    </section><div className="hero-description">
  <h2>Where location meets luxury.</h2>
  <p>
    Timeless living spaces that transcend mere shelter and transform into sanctuaries of unparalleled comfort and indulgence.
    These properties are the benchmark of luxury living, setting new standards of excellence in every facet of our operations.
  </p>
</div>
</>
  

    
  );
};

export default Hero;
