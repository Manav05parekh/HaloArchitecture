import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.css";

gsap.registerPlugin(ScrollTrigger);

const AnimatedText = ({ text }: { text: string }) => {
  return (
    <span className="letter-animate">
      {text.split("").map((char, i) => (
        <span key={i} style={{ animationDelay: `${i * 0.05}s` }}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
};

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (aboutRef.current) {
      gsap.to(aboutRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%", // Triggers when 80% of the section is in view
          toggleActions: "play none none none",
        },
      });
    }
  }, []);

  return (
    <section className="about-wrapper">
      <h1 className="about-heading" ref={aboutRef}>
        <span className="line">
          <span className="bold">
            <AnimatedText text="Architectural" />
          </span>
        </span>
        <span className="line">
          <span className="bold">
            <AnimatedText text="beauty in" />
          </span>{" "}
          <span className="serif">
            <AnimatedText text="the heart" />
          </span>
        </span>
        <span className="line right-align">
          <span className="bold">
            <AnimatedText text="of Mumbai." />
          </span>
        </span>
      </h1>
    </section>
  );
};

export default About;
