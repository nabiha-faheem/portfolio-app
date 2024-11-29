'use client'

// import Link from 'next/link'
// import React from 'react'
// const Navbar = () => {
//   return (

// <div  className=' h-28 bg-[#121212]'>
//   <ul className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center font-bold text-lg">
//     <li className="mr-5 text-white hover:text-slate-300 cursor-pointer"> <Link href="/">Home</Link></li>
//     <li className="mr-5 text-white hover:text-slate-300 cursor-pointer"><Link href="/about">about</Link></li>
//     <li className="mr-5 text-white hover:text-slate-300 cursor-pointer"><Link href="/skill"> Skill</Link></li>
//     <li className="mr-5 text-white hover:text-slate-300 cursor-pointer"><Link href="/contact">Contact</Link></li>
//   </ul>

// </div>









//   )
// }

// export default Navbar























// import { useState } from 'react';
// import Link from 'next/link';

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   return (
//     <div className="bg-[#121212] h-20 shadow-md">
//       <div className="container mx-auto px-6 py-4 flex justify-between items-center">
//         <Link href="/">
//           <a className="text-white font-extrabold text-2xl">MyPortfolio</a>
//         </Link>
//         <div className="hidden md:flex space-x-6">
//           <Link href="/">
//             <a className="text-white text-lg font-semibold hover:text-[#FFC107] transition duration-300">Home</a>
//           </Link>
//           <Link href="/about">
//             <a className="text-white text-lg font-semibold hover:text-[#FFC107] transition duration-300">About</a>
//           </Link>
//           <Link href="/skills">
//             <a className="text-white text-lg font-semibold hover:text-[#FFC107] transition duration-300">Skills</a>
//           </Link>
//           <Link href="/contact">
//             <a className="text-white text-lg font-semibold hover:text-[#FFC107] transition duration-300">Contact</a>
//           </Link>
//         </div>
//         <button
//           className="md:hidden text-white text-2xl"
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//         >
//           <i className={isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
//         </button>
//       </div>

//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-[#121212] text-white space-y-4 py-4 px-6">
//           <Link href="/">
//             <a className="block text-lg font-semibold hover:text-[#FFC107] transition duration-300">Home</a>
//           </Link>
//           <Link href="/about">
//             <a className="block text-lg font-semibold hover:text-[#FFC107] transition duration-300">About</a>
//           </Link>
//           <Link href="/skills">
//             <a className="block text-lg font-semibold hover:text-[#FFC107] transition duration-300">Skills</a>
//           </Link>
//           <Link href="/contact">
//             <a className="block text-lg font-semibold hover:text-[#FFC107] transition duration-300">Contact</a>
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;






















// import { useState } from 'react';
// import Link from 'next/link';

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   return (
//     <div className="bg-[#121212] h-20 shadow-md">
//       <div className="container mx-auto px-6 py-4 flex justify-between items-center">
//         <Link href="/">
//           <span className="text-white font-extrabold text-2xl">MyPortfolio</span>
//         </Link>
//         <div className="hidden md:flex space-x-6">
//           <Link href="/">
//             <span className="text-white text-lg font-semibold hover:text-[#FFC107] transition duration-300">Home</span>
//           </Link>
//           <Link href="/about">
//             <span className="text-white text-lg font-semibold hover:text-[#FFC107] transition duration-300">About</span>
//           </Link>
//           <Link href="/skills">
//             <span className="text-white text-lg font-semibold hover:text-[#FFC107] transition duration-300">Skills</span>
//           </Link>
//           <Link href="/contact">
//             <span className="text-white text-lg font-semibold hover:text-[#FFC107] transition duration-300">Contact</span>
//           </Link>
//         </div>
//         <button
//           className="md:hidden text-white text-2xl"
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//         >
//           <i className={isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
//         </button>
//       </div>

//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-[#121212] text-white space-y-4 py-4 px-6">
//           <Link href="/">
//             <span className="block text-lg font-semibold hover:text-[#FFC107] transition duration-300">Home</span>
//           </Link>
//           <Link href="/about">
//             <span className="block text-lg font-semibold hover:text-[#FFC107] transition duration-300">About</span>
//           </Link>
//           <Link href="/skills">
//             <span className="block text-lg font-semibold hover:text-[#FFC107] transition duration-300">Skills</span>
//           </Link>
//           <Link href="/contact">
//             <span className="block text-lg font-semibold hover:text-[#FFC107] transition duration-300">Contact</span>
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;




















import '@fortawesome/fontawesome-free/css/all.min.css';








// import { useState } from 'react';
// import Link from 'next/link';

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   return (
//     <div className="bg-[#121212] h-20 shadow-md">
//       <div className="container mx-auto px-6 py-4 flex justify-between items-center">
//         <Link href="/">
//           <span className="text-white font-extrabold text-2xl">MyPortfolio</span>
//         </Link>
        
//         <div className="hidden md:flex space-x-6">
//           <Link href="/">
//             <span className="text-white text-lg font-semibold hover:text-[#FFC107] transition duration-300">Home</span>
//           </Link>
//           <Link href="/about">
//             <span className="text-white text-lg font-semibold hover:text-[#FFC107] transition duration-300">About</span>
//           </Link>
//           <Link href="/skills">
//             <span className="text-white text-lg font-semibold hover:text-[#FFC107] transition duration-300">Skills</span>
//           </Link>
//           <Link href="/contact">
//             <span className="text-white text-lg font-semibold hover:text-[#FFC107] transition duration-300">Contact</span>
//           </Link>
//         </div>

//         <button
//           className="md:hidden text-white text-3xl"
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//         >
//           <i className={isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-[#121212] text-white space-y-4 py-4 px-6">
//           <Link href="/">
//             <span className="block text-lg font-semibold hover:text-[#FFC107] transition duration-300">Home</span>
//           </Link>
//           <Link href="/about">
//             <span className="block text-lg font-semibold hover:text-[#FFC107] transition duration-300">About</span>
//           </Link>
//           <Link href="/skills">
//             <span className="block text-lg font-semibold hover:text-[#FFC107] transition duration-300">Skills</span>
//           </Link>
//           <Link href="/contact">
//             <span className="block text-lg font-semibold hover:text-[#FFC107] transition duration-300">Contact</span>
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;




























import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[#121212] h-20 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/">
          <span className="text-white font-extrabold text-2xl">MyPortfolio</span>
        </Link>
        
        <div className="hidden md:flex space-x-6">
          <Link href="/">
            <span className="text-white text-lg font-semibold hover:text-[#FFC107] transition duration-300">Home</span>
          </Link>
          <Link href="/about">
            <span className="text-white text-lg font-semibold hover:text-[#FFC107] transition duration-300">About</span>
          </Link>
          <Link href="/skills">
            <span className="text-white text-lg font-semibold hover:text-[#FFC107] transition duration-300">Skills</span>
          </Link>
          <Link href="/contact">
            <span className="text-white text-lg font-semibold hover:text-[#FFC107] transition duration-300">Contact</span>
          </Link>
        </div>

        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#121212] text-white space-y-4 py-4 px-6">
          <Link href="/">
            <span className="block text-lg font-semibold hover:text-[#FFC107] transition duration-300">Home</span>
          </Link>
          <Link href="/about">
            <span className="block text-lg font-semibold hover:text-[#FFC107] transition duration-300">About</span>
          </Link>
          <Link href="/skills">
            <span className="block text-lg font-semibold hover:text-[#FFC107] transition duration-300">Skills</span>
          </Link>
          <Link href="/contact">
            <span className="block text-lg font-semibold hover:text-[#FFC107] transition duration-300">Contact</span>
          </Link>
        </div>
      )}
    </div>
  ); 
};

export default Navbar;
