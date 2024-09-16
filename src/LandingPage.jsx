import TypingText from './utils/TypingText'
import {data} from './utils/listdata';
import {Blockquote, Button, Carousel} from "flowbite-react";
import { motion, useInView } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useRef } from 'react';

function LandingPage() {
  const v = useRef(null);
  const V = useInView(v);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <section id="landing" className="bg-gray-500 text-white py-20 mt-20 h-screen w-full">
        <div className="container mx-auto text-center">
        <TypingText text="Welcome To My Website!" loop={true} />
          <motion.div className="text-lg mb-8"
            ref={v}
            initial={{ opacity: 0, y: 50 }}
            animate={V ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1 }} 
          > Please click "Start" below to read more about me and see some of my work!</motion.div>
          <a href="#about"><Button className="mx-auto" color="blue" pill>
        Start
      </Button></a>
        </div>
      </section>
      <section id="about" className="py-12 dark:bg-gray-900 dark:text-white w-full">
        <div className="container mx-auto">
        <h1 className="text-center text-2xl font-bold mb-6 mt-20">About Me</h1>
            <Blockquote className="my-4 border-l-4 border-gray-300 bg-gray-200 p-6 dark:border-gray-500 dark:bg-gray-800 text-center">
              "Hello! My name is Kevin N.S. I enjoy playing Minecraft, and I might work as a JSON UI Developer for Minecraft Bedrock. I also like creating Minecraft-related content on TikTok and YouTube."
            </Blockquote>
        </div>
        <h1 className="text-center text-2xl xl:mt-0 font-bold mt-10 mb-10">Minecraft Project</h1>
        <div className="relative w-full pt-[56.25%] max-w-3xl mx-auto overflow-hidden">
          {data.map(() => (
          <Carousel slideInterval={3000} pauseOnHover className="absolute top-0 left-0 w-full h-full">
            {data.map((slideItem, slideIndex) => ( 
            <div key={slideIndex}>
            <img 
                key={slideIndex} 
                src={slideItem.img} 
                alt={slideItem.title} 
                className="object-cover"
              />
            </div>
            ))}
          </Carousel>
          ))}
        </div>
        <Button className="mx-auto mt-10 xl:mt-0" color="blue" pill><Link to="/list">View My Project</Link></Button>
      </section>
    </div>
  );
}

export default LandingPage;