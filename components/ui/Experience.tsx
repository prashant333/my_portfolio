"use client";
import { workExperience } from '@/data'
// import { button } from 'framer-motion/client'
// import { motion } from "framer-motion";
import React from 'react'
import { Button } from './MovingBorders'
// import { LampContainer } from './Lamp';

const Experience = () => {
  return (
    <div className='py-20' id='Experience'>
    {/* <LampContainer className="h-[20vh] w-full">
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        // className="bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight"
      >
      </motion.h1>
    </LampContainer> */}
        <h1 className='heading'>
            My work <span className='text-purple'>Experience</span>
        </h1>
        <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>
            {workExperience.map((card)=>(
                <Button
                key={card.id}
                duration={Math.floor(Math.random()*10000)+10000}
                className='flex-1 text-white border-neutral-200 dark:border-slate-800'
                >
                    <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                        <img 
                        src={card.thumbnail} 
                        alt={card.thumbnail}
                        className='lg:w-32 md:w-20 w-16' />

                        <div className='lg:ms-5'>
                            <h1 className='text-start text-xl md:text-2xl font-bold'>
                                {card.title}
                            </h1>
                            <p className='text-start text-white-100 mt-3 font-semibold'>
                                {card.desc}
                            </p>
                        </div>
                    </div>
                </Button>
            ))}
        </div>
    </div>
  )
}

export default Experience