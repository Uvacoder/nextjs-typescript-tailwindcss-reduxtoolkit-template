import type { NextPage } from "next";
import Layout from "@/components/UI/Layout";
import useDarkmode from "@/hooks/useDarkmode";
import { motion } from "framer-motion";
import { useState } from "react";

const Home: NextPage = () => {
  const [isToggled, setIsToggled] = useState(false);
  const darkmodeToggler = () => {
    setIsToggled(!isToggled);
    useDarkmode();
  };

  return (
    <>
      <Layout title="">
        <div className="grid place-items-center w-screen h-screen font-inter text-3xl dark:bg-black">
          <h1>
            <span className="bg-black text-white p-2 rounded-lg font-bold ">
              Welcome to
            </span>
            <span className="text-white text-6xl font-extrabold">Darkmode</span>
            <span className="flex flex-col">
              <motion.span className="text-8xl font-extrabold text-gray-700">
                NextJS
              </motion.span>
              <span className="text-7xl font-semibold text-gray-600">
                TypeScript
              </span>
              <span className="text-6xl font-light text-gray-500">
                TailwindCSS
              </span>
              <span className="text-5xl font-extralight text-gray-400 text-center">
                Redux Toolkit
              </span>
            </span>
            <section className="grid place-items-center mt-12">
              <div
                className="cursor-pointer text-7xl"
                onClick={darkmodeToggler}
              >
                {!isToggled ? "🌜" : "🌞"}
              </div>
            </section>
          </h1>
        </div>
      </Layout>
    </>
  );
};

export default Home;
