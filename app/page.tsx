'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SplineCanvas from './components/SplineCanvas';


export default function Home() {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
  const handleResize = () => setIsMobile(window.innerWidth <= 768);

  if (typeof window !== 'undefined') {
    handleResize(); // run once on mount
    window.addEventListener('resize', handleResize);
  }

  return () => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', handleResize);
    }
  };
}, []);
  // Start music on first interaction
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (audioRef.current) {
        audioRef.current.play().catch(() => {});
      }
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };

    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('touchstart', handleFirstInteraction);

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, []);

  // Toggle music on/off
  useEffect(() => {
    if (audioRef.current) {
      isPlaying ? audioRef.current.play().catch(() => {}) : audioRef.current.pause();
    }
  }, [isPlaying]);

  const toggleProject = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const projects = [
    {
  title: 'Robot Desk Scene',
  description: 'A 3D workspace built in Spline + Next.js...',
  content: (
    <div className="robot-project">
      <div className="spline-frame"><SplineCanvas /></div>
    </div>
  ),
  mobileHide: true, // ✅ add this flag
},



    {
      title: 'Mementu App',
      description: 'Available on iOS App Store, built with React Native + Expo + Three.js. Turns your phone into a digital corkboard. Drag, resize, and organize colorful sticky notes.',
      content: (
        <div>
          <div className="image-gallery mementu-gallery">
  <div className="image-wrapper"><Image src="/mementu-1.png" alt="Mementu screen 1" width={180} height={400} className="iphone-image" /></div>
  <div className="image-wrapper"><Image src="/mementu-2.png" alt="Mementu screen 2" width={180} height={400} className="iphone-image" /></div>
  <div className="image-wrapper"><Image src="/mementu-3.png" alt="Mementu screen 3" width={180} height={400} className="iphone-image" /></div>
  <div className="image-wrapper"><Image src="/mementu-4.png" alt="Mementu screen 4" width={180} height={400} className="iphone-image" /></div>
  <div className="image-wrapper"><Image src="/mementu-5.png" alt="Mementu screen 5" width={180} height={400} className="iphone-image" /></div>
</div>
          <a
            href="https://apps.apple.com/us/app/mementu/id6752887821?platform=iphone"
            target="_blank"
            rel="noopener noreferrer"
            className="download-button"
          >
            Download on the App Store 🍎
          </a>
        </div>
      ),
    },
    {
      title: 'Reinforcement Learning using ML Agents',
      description: "Evaluating Observations vs. Training Duration in Reinforcement Learning. In our Laurskaan agent's experiment, different observation levels were tested.",
      content: (
        <div className="image-frame">
          <Image src="/rl-poster-preview.png" alt="Research Poster Preview" width={600} height={300} className="project-image" />
        </div>
      ),
    },
    {
      title: 'Facial Emotion Detection',
      description: 'CNNs Tools: TensorFlow, Keras, Pandas, NumPy, Scikit-learn, Matplotlib.',
      content: (
        <p>
          This project focused on building a facial emotion recognition system using the FER2013 dataset—containing over 35,000 48x48 grayscale facial images labeled with seven emotion classes. I began by parsing and preprocessing the pixel data, transforming raw grayscale strings into normalized image tensors. After analyzing class imbalance and visualizing emotion distributions, I experimented with different neural network architectures. Initially, I implemented a fully connected feedforward model to establish a performance baseline, achieving modest accuracy (~39%). Recognizing the limitations of this approach for image data, I designed a convolutional neural network (CNN) that leveraged spatial features through convolutional and pooling layers. By incorporating dropout layers for regularization and optimizing hyperparameters like kernel size and filter count, the final CNN model improved accuracy to ~58% on the training set and ~51% on validation.
        </p>
      ),
    },
    {
      title: 'Spotify Database Design',
      description: 'Spotify Top 200 Charts Database Design (2020–2021)',
      content: (
        <p>
          Using a dataset from Kaggle, I designed and implemented a relational database centered on Spotify's top 200 charting songs. This project involved identifying core entities such as songs, artists, genres, and chart performance, and modeling their relationships through an entity-relationship diagram. I normalized the data to Boyce-Codd Normal Form (BCNF) to ensure data integrity and eliminate redundancy. The final system was developed in Microsoft Access, complete with input forms, ad hoc queries, and validation rules to support efficient music data management and analysis.
        </p>
      ),
    },
    {
      title: 'Blend 41 Art Magazine Spring 2025 Issue',
      description: 'This zine was entirely made by hand with no digital elements. Print outs and fabrics: creating a bursting college',
      content: <p>Editors: Muskaan Moinuddin, Fiona Macky, Kamea Somerville, Stephanie Yelovich</p>,
    },
    {
      title: 'Lost in Intranslation Book',
      description: 'Hand Embossing, Gouche painting, Photography, & Fineline drawing',
      content: <p>Coming soon:</p>,
    },
    {
      title: 'My Route - Design Final',
      description: 'Monitored by Professor Derek of Pace University',
      content: (
        <p>
          For this piece I decided to get cut a rectangular piece of wood, wrap it with canvas, and laser print the map of the Financial District, hammer nails, and string.
        </p>
      ),
    },
  ];

  return (
    <>
      <audio ref={audioRef} src="/fruitgo.mp3" loop preload="auto" />
      <button className="music-toggle" onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? '🔊' : '🔇'}
      </button>

      <main>
        <section id="projects">
          <h2>Projects</h2>
          <div className="timeline-glass">
            <div className="timeline">
              <div className="timeline-line" />

              {projects.map((project, index) => {

  return (
    <motion.div
  key={index}
  className={`timeline-point ${project.mobileHide ? 'mobile-hide' : ''}`}
  initial={{ opacity: 0, y: 40 }}
  animate={isMobile ? { opacity: 1, y: 0 } : undefined}
  whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
  viewport={isMobile ? undefined : { once: true }}
>
      <div className="project-card" onClick={() => toggleProject(index)} style={{ cursor: 'pointer' }}>
        <div className="project-header">
          <h3>{project.title}</h3>
          <span className="toggle-icon">{openIndex === index ? '–' : '+'}</span>
        </div>
        <p>{project.description}</p>

        {openIndex === index ? (
  <motion.div
    initial={{ opacity: 0, height: 0 }}
    animate={{ opacity: 1, height: 'auto' }}
    transition={{ duration: 0.4 }}
    style={{ overflow: 'hidden', marginTop: '16px' }}
  >
    {project.content}
  </motion.div>
) : null}
      </div>
    </motion.div>
  );
})}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
         <p>Credits: 川越 好博 - SABBATH (music)</p>
         <p>Created by Muskaan Moinuddin</p>
 
</footer>
    </>
  );
}

// import Image from "next/image";
// import styles from "./page.module.css";

// export default function Home() {
//   return (
//     <div className={styles.page}>
//       <main className={styles.main}>
//         <Image
//           className={styles.logo}
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol>
//           <li>
//             Get started by editing <code>app/page.tsx</code>.
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>

//         <div className={styles.ctas}>
//           <a
//             className={styles.primary}
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className={styles.logo}
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//             className={styles.secondary}
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className={styles.footer}>
//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }
