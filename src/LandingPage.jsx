import TypingText from './TypingText'
import NumberTicker from './NumberTicker';
import {Blockquote} from "flowbite-react";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

function LandingPage() {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <section id="landing" className="bg-gray-500 text-white py-20 mt-20 h-screen w-full">
        <div className="container mx-auto text-center">
        <TypingText text="Welcome To My Website!" loop={true} />
          <motion.div className="text-lg mb-8"
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1 }} 
          > Please click "Start" below to read more about me and see some of my work!</motion.div>
          <a href="#about"><button className="bg-white text-blue-500 font-bold py-2 px-4 rounded">
            Start
          </button></a>
        </div>
      </section>
      <section id="about" className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
            <Blockquote className="my-4 border-l-4 border-gray-300 bg-gray-200 p-4 dark:border-gray-500 dark:bg-gray-800 flex justify-center items-center text-center">
              "Hello! My name is Kevin N.S. I enjoy playing Minecraft, and I might work as a JSON UI Developer for Minecraft Bedrock. I also like creating Minecraft-related content on TikTok and YouTube."
            </Blockquote>
          <div className="md:w-1/2 md:ml-4 mt-4 md:mt-0"> {/* Container untuk teks */}
            <h2 className="text-3xl font-bold mb-2 text-center md:text-left">{/* Styling mirip "About Me" */}
              Performing after KNZ UI Release
            </h2>
          </div>
          <div className="flex justify-between items-center p-8 md:flex-row md:items-center"> 
            <div className="flex flex-col items-center md:w-1/2"> 
              <NumberTicker targetNumber={5} />
              <p className="text-gray-500 mt-2">Video Review</p> 
            </div>
            <div className="flex flex-col items-center md:w-1/2"> 
              <NumberTicker targetNumber={8000} />
              <p className="text-gray-500 mt-2">Download</p> 
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;