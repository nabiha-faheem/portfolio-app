
"use client"
import Image from 'next/image';

import dynamic from 'next/dynamic';

// Dynamically import framer-motion with SSR disabled
const MotionH1 = dynamic(() => import('framer-motion').then(mod => mod.motion.h1), { ssr: false });
const MotionDiv = dynamic(() => import('framer-motion').then(mod => mod.motion.div), { ssr: false });
const MotionP = dynamic(() => import('framer-motion').then(mod => mod.motion.p), { ssr: false });
const MotionButton = dynamic(() => import('framer-motion').then(mod => mod.motion.button), { ssr: false });

const About = () => {
  return (
    <section className='bg-[#121212] py-24'>
      <div className='container mx-auto px-6 md:px-12 text-center'>
        {/* Section Header */}
        <MotionH1
          className='text-5xl sm:text-6xl text-white font-extrabold mb-6 tracking-tight'
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          About Me
        </MotionH1>
        {/* Subtle Gradient Divider */}
        <MotionDiv
          className="mx-auto mb-16 w-40 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        />
        {/* Introduction Text */}
        <MotionP
          className='text-lg sm:text-xl text-white mb-8 leading-relaxed tracking-wide'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          I&apos;m a passionate web developer who started my coding journey in 2023. I&apos;ve built a solid foundation in HTML, CSS, and JavaScript, and I&apos;ve expanded into TypeScript and Next.js. I&apos;m constantly learning and experimenting with new technologies to create intuitive and beautiful web experiences.
        </MotionP>
        {/* Profile Image */}
        <MotionDiv
          className="relative mx-auto mb-10 w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 shadow-xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="absolute inset-0 w-full h-full bg-opacity-30 animate-pulse"></div>
          <div className="relative z-10 w-full h-full">
            <Image
              src="/download.jpg" // Replace with your image path
              alt="Your Profile"
              width={300}
              height={300}
              className="object-cover w-full h-full rounded-full"
            />
          </div>
        </MotionDiv>
        {/* Skills & Interests */}
        <MotionDiv
          className="mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-white text-xl sm:text-2xl font-semibold mb-2">
            My Skills & Interests
          </h2>
          <p className="text-sm sm:text-base text-[#ADB7BE]">
            Besides web development, I love exploring UI/UX design principles and constantly learning about the latest trends in technology. I&apos;m committed to creating websites that are both user-friendly and visually appealing.
          </p>
        </MotionDiv>
        {/* Action Buttons */}
        <MotionDiv
          className="flex justify-center gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <button className="px-10 py-5 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white rounded-full shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-110">
            Contact Me
          </button>
          <button className="px-10 py-5 bg-transparent border-2 border-white text-white rounded-full shadow-lg hover:bg-slate-800 transition duration-300 transform hover:scale-110">
            View My Work
          </button>
        </MotionDiv>
      </div>
    </section>
  );
}

export default About;
