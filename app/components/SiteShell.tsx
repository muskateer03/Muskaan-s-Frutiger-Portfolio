'use client';

import '../globals.css';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function SiteShell({ children }: { children: React.ReactNode }) {

  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 768;

  if (!hasMounted) return null;

  return (
  <>
    {/* Mobile hamburger toggle */}
    {isMobile && (
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? '✕' : '☰'}
      </button>
    )}

    {/* Mobile drawer */}
    {isMobile && (
      <aside className={`mobile-drawer ${menuOpen ? '' : 'closed'}`}>
        <button className="drawer-close" onClick={() => setMenuOpen(false)}>✕</button>

        <div className="profile">
          <Image src="./muskaan.jpg" alt="Muskaan" width={96} height={96} className="profile-photo" />
          <h2>Hi, I'm Muskaan!</h2>
          <p>Current Student @ Johns Hopkins University MS in Artificial Intelligence</p>
          <p>BS in Computational Economics @ Pace University</p>
          <h3>Skills</h3>
          <p>Java | Python | C++ | React | Three.js | Stata | SQL | R | Excel | Adobe Suite</p>
        </div>

        <nav className="nav-links">
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="/resume.pdf" target="_blank" onClick={() => setMenuOpen(false)}>Resume</a>
          <a href="mailto:mm1797n@gmail.com" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
      </aside>
    )}

    {/* Desktop layout */}
    <div className="desktop-layout">
      <aside className="sidebar">
        <div className="profile">
          <Image src="/muskaan.JPG" alt="Muskaan" width={96} height={96} className="profile-photo" />
          <h2>Hi, I&apos;m Muskaan!</h2>
          <p>Current Student @ Johns Hopkins University MS in Artificial Intelligence</p>
          <p>BS in Computational Economics @ Pace University</p>
          <h3>Skills</h3>
          <p>Java | Python | C++ | React | Three.js | Stata | SQL | R | Excel | Adobe Suite</p>
        </div>

        <nav className="nav-links">
          <a href="#projects">Projects</a>
          <a href="/resume.pdf" target="_blank">Resume</a>
          <a href="mailto:mm1797n@gmail.com">Contact</a>
          <hr />
          <a href="https://github.com/muskateer03" target="_blank">GitHub</a>
          <a href="https://linkedin.com/in/muskaanmoinuddin" target="_blank">LinkedIn</a>
          <a href="https://medium.com/@muskaan-m" target="_blank">Medium</a>
        </nav>
      </aside>

      <main className="main-content">
        {children}
      </main>
    </div>
  </>
);
}