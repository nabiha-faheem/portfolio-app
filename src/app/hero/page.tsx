"use client"
// import React from 'react'
// import Image from 'next/image'


// import { TypeAnimation } from 'react-type-animation';


    
  



// const HeroSection = () => {
//   return (
  
// <section className=' bg-[#121212] w-fit '>
//     <div className='grid grid-cols-1 sm:grid-cols-12'>
//         <div className="col-span-7 place-self-center text-center sm:text-left">
//     <h1 className='text-white mb-4 text-4xl lg:text-6xl sm:text-5xl font-extrabold'>
//         <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Hello, I'm {""}

//         </span>
//         <br/>

//         <TypeAnimation
//       sequence={[
//         // Same substring at the start will only be typed out once, initially
//         'Nabiya',
//         1000, // wait 1s before replacing "Mice" with "Hamsters"
//         'Web Developer',
//         1000,
       
//   'Nabiya',
//          1000,

//         'UI/UX Designer',
//         1000
//       ]}
//       wrapper="span"
//       speed={50}
//       style={{ fontSize: '1em', display: 'inline-block' }}
//       repeat={Infinity}
//     />



//         </h1>
//     <p className='text-[#ADB7BE] text-lg lg:text-xl mb-6 text-base'>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae facere dolor reprehenderit?
//         </p>

// <div>
//     <button className=' w-full px-6 py-3 sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-400 text-white'>Hire Me</button>
//     <button className=' w-full sm:w-fit px-6 py-3 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white border border-white mt-3'>
//         <span className='block    rounded-full px-1 py-1 '>Download Cv</span></button>

// </div>

//         </div>
//         <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
//         <div className="  rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
//             <Image src="/download.jpg"
//             alt='doll'
//             height={300}
//             className='absolute transform rounded-full  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
//             width={300}/>
//         </div>
//         </div>
//         </div>
// </section>

//   )
// }

// export default HeroSection























// "use client"
// import React from 'react'
// import Image from 'next/image'
// import { TypeAnimation } from 'react-type-animation'

// const HeroSection = () => {
//   return (
//     <section className='bg-[#121212] w-full py-16 lg:py-32'>
//       <div className='container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12'>
        
//         <div className="flex flex-col justify-center text-center md:text-left space-y-6">
//           <h1 className='text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
//               Hello, I'm{" "}
//             </span>
//             <br />
//             <TypeAnimation
//               sequence={[
//                 'Nabiya',
//                 1000,
//                 'Web Developer',
//                 1000,
//                 'Nabiya',
//                 1000,
//                 'UI/UX Designer',
//                 1000
//               ]}
//               wrapper="span"
//               speed={50}
//               style={{ fontSize: '1em', display: 'inline-block' }}
//               repeat={Infinity}
//             />
//           </h1>
          
//           <p className='text-[#ADB7BE] text-lg lg:text-xl'>
//             I create beautiful and functional websites and user experiences that solve real-world problems.
//           </p>
          
//           <div className='flex justify-center md:justify-start gap-4'>
//             <button className='px-8 py-3 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-400 text-white transition duration-300'>
//               Hire Me
//             </button>
//             <button className='px-8 py-3 rounded-full bg-transparent border-2 border-white hover:bg-slate-800 text-white transition duration-300'>
//               <span className='block px-4 py-2 rounded-full'>Download CV</span>
//             </button>
//           </div>
//         </div>
        
//         <div className="flex justify-center items-center">
//           <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] rounded-full bg-[#181818]">
//             <Image
//               src="/download.jpg"
//               alt="Profile Image"
//               className="absolute rounded-full object-cover transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//               width={400}
//               height={400}
//             />
//           </div>
//         </div>
        
//       </div>
//     </section>
//   )
// }

// export default HeroSection;


































"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'

const HeroSection = () => {
  return (
    <section className='bg-[#121212] w-full py-24 lg:py-32'>
      <div className='container mx-auto px-6 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-12'>
        
        {/* Left Column - Text */}
        <div className="flex flex-col text-center md:text-left space-y-8 md:space-y-10">
          <h1 className='text-white text-5xl sm:text-6xl lg:text-7xl font-extrabold'>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <span className="text-white">
              <TypeAnimation
                sequence={[
                  'Nabiya',
                  1000,
                  'Web Developer',
                  1000,
                  'Nabiya',
                  1000,
                  'UI/UX Designer',
                  1000
                ]}
                wrapper="span"
                speed={60}
                style={{ fontSize: '1.25em', display: 'inline-block' }}
                repeat={Infinity}
              />
            </span>
          </h1>
          
          <p className='text-[#ADB7BE] text-lg sm:text-xl'>
            I design and develop stunning websites with a focus on user experience, performance, and functionality.
            Let&apos;s create something amazing together!
          </p>

          {/* Buttons */}
          <div className='flex justify-center md:justify-start gap-6'>
            <button className='px-8 py-4 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-600 text-white font-semibold text-lg transition duration-300 transform hover:scale-105'>
              Hire Me
            </button>
            <button className='px-8 py-4 rounded-full border-2 border-white hover:bg-slate-800 text-white font-semibold text-lg transition duration-300 transform hover:scale-105'>
              <span className='block px-4 py-2'>Download CV</span>
            </button>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden shadow-2xl">
          <Image
            src="/download.jpg"
            alt="Profile Image"
            className="object-cover transform transition-transform duration-500 hover:scale-110"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection;
