// content.tsx
"use client";
// Import necessary modules from React and Framer Motion
import React from "react";
import { motion } from "framer-motion";

const Content: React.FC = () => {
  // Define the data for each box, could also be fetched from an API or defined in props
  const boxes = [
    {
      id: 1,
      title: "Tejal",
      description:
        "Provided the idea and Made the c++ code for the syntax checker ",
      image: "/image/people/IMG-20240506-WA0001.jpg",
    },
    {
      id: 2,
      title: "Vibha",
      description:
        "made the functionalities of the code such as checking syntax of  brackets paranthesis keywords etc ",
      image: "/image/people/IMG-20240506-WA0002.jpg",
    },
    {
      id: 3,
      title: "Sidharth",
      description:
        "Made all the necessary updates in the code made sure to reduce the time complexity and gave idea about using input as file so that user can upload the code directly ",
      image: "/image/people/image.png",
    },
    {
      id: 4,
      title: "Shreepaada",
      description:
        "Converted the c++ file into executable file and used flask to run it using python .and using this file called it as an api using axios and called it in an next js project for better ui design",
      image: "/image/people/IMG-20240506-WA0003.jpg",
    },
  ];

  // Define animation variants for the hover effect
  const variants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    hover: {
      scale: 1.05,
      rotate: [0, 5, -5, 5, -5, 0], // Giggly effect
      transition: {
        duration: 0.6,
        yoyo: Infinity, // Make the animation loop
      },
    },
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4 p-4">
      <h1 className="text-2xl font-bold mb-4">About Us</h1>
      <div className="flex flex-wrap justify-center items-center gap-4">
        {boxes.map((box) => (
          <motion.div
            key={box.id}
            className="w-72 h-96 bg-white rounded-lg overflow-hidden shadow-lg flex flex-col justify-between items-center"
            variants={variants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            style={{ padding: "20px", color: "blue" }}
          >
            <motion.div whileHover={{ scale: 1.05 }}>
              <img
                src={box.image}
                alt="Placeholder"
                className="w-full h-48 object-cover rounded"
              />
            </motion.div>
            <div className="flex flex-col justify-center items-center h-48">
              <h2 className="text-lg font-bold">{box.title}</h2>
              <p className="text-sm text-gray-600 overflow-hidden">
                {box.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-0 h-10 bg-white opacity-0 pointer-events-none"></div>
    </div>
  );
};

export default Content;
