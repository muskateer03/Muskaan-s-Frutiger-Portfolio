// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import SiteShell from './components/SiteShell'; // we'll move your layout logic here

export const metadata: Metadata = {
  title: 'Muskaan Moinuddin',
  description: 'Creative Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}

// most recent
// 'use client';

// import './globals.css';
// import Image from 'next/image';
// import { useState, useEffect } from 'react';

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [windowWidth, setWindowWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 1024);
//   const [hasMounted, setHasMounted] = useState(false);

//   useEffect(() => {
//     setHasMounted(true);
//     const handleResize = () => setWindowWidth(window.innerWidth);
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const isMobile = windowWidth <= 768;

//   if (!hasMounted) return null;

//   return (
//     <html lang="en">
//       <body>
//         {/* Mobile hamburger toggle */}
//         {isMobile && (
//           <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
//             {menuOpen ? '✕' : '☰'}
//           </button>
//         )}

//         {/* Mobile drawer */}
//         {isMobile && (
//   <aside className={`mobile-drawer ${menuOpen ? '' : 'closed'}`}>
//     <button className="drawer-close" onClick={() => setMenuOpen(false)}>✕</button>

//     <div className="profile">
//       <Image src="/muskaan.jpg" alt="Muskaan" width={96} height={96} className="profile-photo" />
//       <h2>Hi, I'm Muskaan!</h2>
//       <p>Current Student @ Johns Hopkins University MS in Artificial Intelligence</p>
//       <p>BS in Computational Economics @ Pace University</p>
//       <h3>Skills</h3>
//       <p>Java | Python | C++ | React | Three.js | Stata | SQL | R | Excel | Adobe Suite</p>
//     </div>

//     <nav className="nav-links">
//       <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
//       <a href="/resume.pdf" target="_blank" onClick={() => setMenuOpen(false)}>Resume</a>
//       <a href="mailto:mm1797n@gmail.com" onClick={() => setMenuOpen(false)}>Contact</a>
//     </nav>
//   </aside>
// )}

//         {/* Desktop layout */}
//         <div className="desktop-layout">
//           <aside className="sidebar">
//             <div className="profile">
//               <Image src="/muskaan.jpg" alt="Muskaan" width={96} height={96} className="profile-photo" />
//               <h2>Hi, I'm Muskaan!</h2>
//                <p>Current Student @ Johns Hopkins University MS in Artificial Intelligence</p>
//               <p>BS in Computational Economics @ Pace University</p>
//               <h3>Skills</h3>
//               <p>Java | Python | C++ | React | Three.js | Stata | SQL | R | Excel | Adobe Suite</p>
//             </div>

//             <nav className="nav-links">
//               <a href="#projects">Projects</a>
//               <a href="/resume.pdf" target="_blank">Resume</a>
//               <a href="mailto:mm1797n@gmail.com">Contact</a>
//               <hr />
//               <a href="https://github.com/muskateer03" target="_blank">GitHub</a>
//               <a href="https://linkedin.com/in/muskaanmoinuddin" target="_blank">LinkedIn</a>
//               <a href="https://medium.com/@muskaan-m" target="_blank">Medium</a>
//             </nav>
//           </aside>

//           <main className="main-content">
//             {children}
//           </main>
//         </div>
//       </body>
//     </html>
//   );
// }

// last used
// 'use client';

// import './globals.css';
// import Image from 'next/image';
// import { useState, useEffect } from 'react';

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [windowWidth, setWindowWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 1024);

//   useEffect(() => {
//     const handleResize = () => setWindowWidth(window.innerWidth);
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const isMobile = windowWidth <= 768;

//   return (
//     <html lang="en">
//       <body>
//         {/* Mobile hamburger toggle */}
//         {isMobile && (
//           <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
//             {menuOpen ? '✕' : '☰'}
//           </button>
//         )}

//         {/* Mobile drawer */}
//         {isMobile && menuOpen && (
//           <aside className="mobile-drawer">
//             <div className="profile">
//               <Image
//                 src="/muskaan.jpg"
//                 alt="Muskaan"
//                 width={96}
//                 height={96}
//                 className="profile-photo"
//               />
//               <h2>Hi, I'm Muskaan!</h2>
//               <p>MS in Artificial Intelligence @ Johns Hopkins</p>
//               <p>BS in Computational Economics @ Pace University</p>
//               <h3>Skills</h3>
//               <p>Java | Python | C++ | React | Three.js | Stata | SQL | R | Excel | Adobe Suite</p>
//             </div>

//             <nav className="nav-links">
//               <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
//               <a href="/resume.pdf" target="_blank" onClick={() => setMenuOpen(false)}>Resume</a>
//               <a href="mailto:mm1797n@gmail.com" onClick={() => setMenuOpen(false)}>Contact</a>
//             </nav>
//           </aside>
//         )}

//         {/* Always render sidebar */}
//         <div className="desktop-layout">
//           <aside className="sidebar">
//             <div className="profile">
//               <Image
//                 src="/muskaan.jpg"
//                 alt="Muskaan"
//                 width={96}
//                 height={96}
//                 className="profile-photo"
//               />
//               <h2>Hi, I'm Muskaan!</h2>
//               <p>MS in Artificial Intelligence @ Johns Hopkins</p>
//               <p>BS in Computational Economics @ Pace University</p>
//               <h3>Skills</h3>
//               <p>Java | Python | C++ | React | Three.js | Stata | SQL | R | Excel | Adobe Suite</p>
//             </div>

//             <nav className="nav-links">
//               <a href="#projects">Projects</a>
//               <a href="/resume.pdf" target="_blank">Resume</a>
//               <a href="mailto:mm1797n@gmail.com">Contact</a>
//               <hr />
//               <a href="https://github.com/muskateer03" target="_blank">GitHub</a>
//               <a href="https://linkedin.com/in/muskaanmoinuddin" target="_blank">LinkedIn</a>
//               <a href="https://medium.com/@muskaan-m" target="_blank">Medium</a>
//             </nav>
//           </aside>

//           <main className="main-content">{children}</main>
//         </div>
//       </body>
//     </html>
//   );
// }




// 'use client';

// import './globals.css';
// import Image from 'next/image';
// import { useState, useEffect } from 'react';

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkMobile = () => setIsMobile(window.innerWidth <= 768);
//     checkMobile();
//     window.addEventListener('resize', checkMobile);
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   return (
//     <html lang="en">
//       <body>
//         <div className="desktop-layout">
//           <aside className={`sidebar ${isMobile ? 'mobile' : ''}`}>
//             <div className="profile">
//               <Image
//                 src="/muskaan.jpg"
//                 alt="Muskaan"
//                 width={96}
//                 height={96}
//                 className="profile-photo"
//               />

//               <h2>Hi, I'm Muskaan!</h2>
//               <p>Current Student @ Johns Hopkins University - MS in Artificial Intelligence</p>
//               <p>BS in Computational Economics @ Pace University</p>

//               <h3>Skills</h3>
//               <p>Java | Python | C++ | React | Three.js | Stata | SQL | R | Excel | Adobe Suite</p>
//             </div>

//             {isMobile && (
//               <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
//                 {menuOpen ? '✕' : '☰'}
//               </button>
//             )}

//             <nav className={`nav-links ${menuOpen || !isMobile ? 'open' : ''}`}>
//               <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
//               <a href="/resume.pdf" target="_blank" onClick={() => setMenuOpen(false)}>Resume</a>
//               <a href="mailto:mm1797n@gmail.com" onClick={() => setMenuOpen(false)}>Contact</a>
//               <hr />
//               <a href="https://github.com/muskateer03" target="_blank" onClick={() => setMenuOpen(false)}>GitHub</a>
//               <a href="https://linkedin.com/in/muskaanmoinuddin" target="_blank" onClick={() => setMenuOpen(false)}>LinkedIn</a>
//               <a href="https://medium.com/@muskaan-m" target="_blank" onClick={() => setMenuOpen(false)}>Medium</a>
//             </nav>
//           </aside>

//           <main className="main-content">{children}</main>
//         </div>
//       </body>
//     </html>
//   );
// }