'use client'

import Bout from "./about/page";
import Contact from "./contact/page";
import HeroSection from "./hero/page";
import Skill from "./skills/page";
import Skills from "./skills/page";

export default function Home() {
  return (
  <main>
    <HeroSection/>
    <Bout/>
<Skills/>
    <Contact/>
  </main>
  );
}
