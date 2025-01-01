'use client'
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import { desc, div, span } from "framer-motion/client";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from '@/data/confetti.json'
import { MagicButton } from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
//import { GlobeDemo } from "./GridGlobe";


export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(

        // sets the size of BentoGrid
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id: number;
  img?:string;
  imgClassName?:String;
  titleClassName?:String;
  spareImg?:string;
}) => {

    const [copied, setCopied] = useState(false);

    const handleCopy =()=>{
        navigator.clipboard.writeText('pmani157@gmail.com');
        setCopied(true);
    }
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none border border-white/[0.1] justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
        <div className={`${id === 6 && "flex justify-center"} h-full`}>
            <div className="w-full h-full absolute">
                {img && (
                    <img
                    src= {img}
                    alt= {img}
                    className={cn(imgClassName, "object-cover, object-center")}
                    />
                )}
            </div>
            <div className= {`absolute right-0 -bottom-5 ${id ===5 && 'w-full opacity-80'}`}>
                {spareImg &&(
                    <img
                    src={spareImg}
                    alt={spareImg}
                    className={'object-cover, object-center, w-full h-full'}
                    />
                )}
            </div>
            {id===6 &&(
                <BackgroundGradientAnimation />
            )}

            <div className={cn(
                titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
            )}>
                <div className="font-sans font-extralight md:max-w-40 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
                    {description}
                </div>
                <div className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}>
                    {title}
                </div>

            {id ===3 &&(
                <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-1">
                    <div className="flex flex-col gap-3 lg:gap-2">
                        {['React.js', 'Next.js', 'Typescript'].map(
                            (item) =>(
                                <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                                    {item}
                                </span>
                            ))}
                            <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]"/>
                    </div>
                    <div className="flex flex-col gap-3 lg:gap-2">
                    <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]"/>
                        {['Python', 'Postgresql', 'MongoDB'].map(
                            (item) =>(
                                <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                                    {item}
                                </span>
                            ))}
                    </div>
                </div>
                
            )}

            {id===6 && (
                <div className="mt-5 relative">
                    <div className = {`absolute -bottom-5 right-0`}>
                        <Lottie options={{
                            loop: copied,
                            autoplay: copied,
                            animationData,
                            rendererSettings: {
                                preserveAspectRatio: 'xMidyMid slice',
                            }
                        }}/>
                    </div>
                        <MagicButton 
                            title = {copied ? "Email copied" : "Copy my email"}
                            icon = {<IoCopyOutline />}
                            position= 'left'
                            otherClasses= "!bg-[#161a31]"
                            handleClick={handleCopy}
                        />
                </div>
            )}
        </div>
    </div>
    </div>
  );
};