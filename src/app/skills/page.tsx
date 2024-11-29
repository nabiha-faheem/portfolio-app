'use client'




import React from 'react'
import { motion } from 'framer-motion'
import { FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs, SiTypescript } from 'react-icons/si'

const Skills = () => {
  return (
    <section className="bg-[#121212] py-20">
      <div className="container px-6 mx-auto text-center">
        
        {/* Section Title */}
        <motion.h1
          className="text-4xl font-extrabold text-white mb-8"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          My Skills
        </motion.h1>
        
        {/* Section Subtitle */}
        <motion.p
          className="text-xl text-gray-400 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          These are the skills I’ve mastered and continue to improve on. Check them out!
        </motion.p>

        {/* Skill Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {/* HTML Card */}
          <motion.div
            className="bg-gradient-to-r from-[rgba(255,106,0,0.8)] via-[rgba(255,158,0,0.8)] to-[rgba(255,203,0,0.8)] p-6 w-80 h-80 rounded-lg shadow-lg hover:scale-105 transform transition duration-500 ease-in-out"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-6xl text-white mb-4">
              <FaHtml5 />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">HTML</h2>
            <p className="text-gray-300 mb-4">
              I have attained 80% proficiency in HTML, excelling in creating responsive, semantic, and accessible web pages.
            </p>
            <div className="w-full bg-[rgba(255,255,255,0.2)] rounded-full h-2.5 mb-4">
              <div className="bg-[#ff6600] h-2.5 rounded-full" style={{ width: '80%' }}></div>
            </div>
          </motion.div>

          {/* CSS Card */}
          <motion.div
            className="bg-gradient-to-r from-[rgba(30,60,114,0.8)] via-[rgba(42,82,152,0.8)] to-[rgba(0,63,107,0.8)] p-6 w-80 h-80 rounded-lg shadow-lg hover:scale-105 transform transition duration-500 ease-in-out"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-6xl text-white mb-4">
              <FaCss3Alt />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">CSS</h2>
            <p className="text-gray-300 mb-4">
              I’ve achieved 80% proficiency in CSS, mastering responsive layouts, Flexbox, Grid, and animations.
            </p>
            <div className="w-full bg-[rgba(255,255,255,0.2)] rounded-full h-2.5 mb-4">
              <div className="bg-[#0066cc] h-2.5 rounded-full" style={{ width: '80%' }}></div>
            </div>
          </motion.div>

          {/* Tailwind CSS Card */}
          <motion.div
            className="bg-gradient-to-r from-[rgba(79,157,255,0.8)] via-[rgba(56,189,248,0.8)] to-[rgba(34,197,94,0.8)] p-6 w-80 h-80 rounded-lg shadow-lg hover:scale-105 transform transition duration-500 ease-in-out"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-6xl text-white mb-4">
              <SiTailwindcss />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Tailwind CSS</h2>
            <p className="text-gray-300 mb-4">
              I am highly proficient in **Tailwind CSS** (80%), enabling me to create flexible, responsive layouts quickly with utility-first classes.
            </p>
            <div className="w-full bg-[rgba(255,255,255,0.2)] rounded-full h-2.5 mb-4">
              <div className="bg-[#22c55e] h-2.5 rounded-full" style={{ width: '80%' }}></div>
            </div>
          </motion.div>

          {/* Next.js Card */}
          <motion.div
            className="bg-gradient-to-r from-[rgba(86,204,242,0.8)] via-[rgba(106,117,212,0.8)] to-[rgba(139,68,215,0.8)] p-6 w-80 h-80 rounded-lg shadow-lg hover:scale-105 transform transition duration-500 ease-in-out"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-6xl text-white mb-4">
              <SiNextdotjs />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Next.js</h2>
            <p className="text-gray-300 mb-4">
              I have 75% proficiency in **Next.js**, specializing in server-side rendering, static site generation, and API routes.
            </p>
            <div className="w-full bg-[rgba(255,255,255,0.2)] rounded-full h-2.5 mb-4">
              <div className="bg-[#4c8fdb] h-2.5 rounded-full" style={{ width: '75%' }}></div>
            </div>
          </motion.div>

          {/* React.js Card */}
          <motion.div
            className="bg-gradient-to-r from-[rgba(97,219,251,0.8)] via-[rgba(32,193,243,0.8)] to-[rgba(20,162,211,0.8)] p-6 w-80 h-80 rounded-lg shadow-lg hover:scale-105 transform transition duration-500 ease-in-out"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-6xl text-white mb-4">
              <FaReact />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">React.js</h2>
            <p className="text-gray-300 mb-4">
              I’m at 50% proficiency in **React.js**, and I’m continuing to grow in state management, hooks, and component-based architecture.
            </p>
            <div className="w-full bg-[rgba(255,255,255,0.2)] rounded-full h-2.5 mb-4">
              <div className="bg-[#00d8ff] h-2.5 rounded-full" style={{ width: '50%' }}></div>
            </div>
          </motion.div>

          {/* TypeScript Card */}
          <motion.div
            className="bg-gradient-to-r from-[rgba(49,120,198,0.8)] via-[rgba(44,110,212,0.8)] to-[rgba(31,95,191,0.8)] p-6 w-80 h-80 rounded-lg shadow-lg hover:scale-105 transform transition duration-500 ease-in-out"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-6xl text-white mb-4">
              <SiTypescript />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">TypeScript</h2>
            <p className="text-gray-300 mb-4">
              I’m at 85% proficiency in **TypeScript**, specializing in type annotations, interfaces, and creating maintainable codebases.
            </p>
            <div className="w-full bg-[rgba(255,255,255,0.2)] rounded-full h-2.5 mb-4">
              <div className="bg-[#3178c6] h-2.5 rounded-full" style={{ width: '85%' }}></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Skills;
