"use client";
import axios from "axios";
import { useState, ChangeEvent, MouseEvent } from "react";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<string>("");

  const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files ? event.target.files[0] : null);
  };

  const onFileUpload = async (event: MouseEvent<HTMLButtonElement>) => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await axios.post(
          "http://localhost:5000/check-syntax",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setResult(response.data.output);
      } catch (error: any) {
        setResult(
          error.response?.data?.error || "An error occurred during file upload"
        );
      }
    } else {
      setResult("Please select a file first.");
    }
  };

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    whileHover: { scale: 1.02, transition: { duration: 0.2 } },
  };

  return (
    <div className="relative min-h-screen bg-blue-500 flex justify-center items-center p-10">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        {/* Text rotations and placements */}
        <div
          className="absolute top-10 left-10 rotate-12 text-white text-opacity-20"
          style={{ fontSize: "calc(8px + 1vmin)" }}
        >
          <div className="font-bold">
            Error Detection and Prevention: A syntax checker primarily helps in
          </div>
        </div>
        <div
          className="absolute bottom-20 right-10 -rotate-12 text-white text-opacity-20"
          style={{ fontSize: "calc(8px + 1.5vmin)" }}
        >
          <div className="font-bold">
            identifying syntax errors before the code is compiled or run.
          </div>
        </div>
        <div
          className="absolute top-1/4 left-1/4 -rotate-6 text-white text-opacity-20"
          style={{ fontSize: "calc(8px + 2vmin)" }}
        >
          <div className="font-bold">
            This includes common mistakes like missing semicolons, unmatched
            parentheses
          </div>
        </div>
        <div
          className="absolute bottom-1/4 right-1/4 rotate-6 text-white text-opacity-20"
          style={{ fontSize: "calc(8px + 2vmin)" }}
        >
          <div className="font-bold">
            or brackets, and typographical errors in variable names or function
            calls.
          </div>
        </div>
      </div>
      <motion.div
        variants={cardVariants}
        initial="initial"
        animate="animate"
        whileHover="whileHover"
        className="w-full max-w-4xl bg-white rounded-lg shadow-xl overflow-hidden flex flex-col md:flex-row z-10"
      >
        <div className="flex flex-col space-y-4 p-6 w-full md:w-1/2">
          <h1 className="text-xl font-bold">Syntax Checker</h1>
          <input
            type="file"
            onChange={onFileChange}
            className="border p-2 rounded"
          />
          <motion.button
            onClick={onFileUpload}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Check Syntax
          </motion.button>
        </div>
        <div
          className="flex-1 p-6 bg-gray-100 overflow-auto"
          style={{ maxHeight: "500px" }}
        >
          <h2 className="text-lg font-semibold mb-2">Output:</h2>
          <div className="whitespace-pre text-gray-800 font-mono text-sm overflow-auto p-2">
            {result}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
