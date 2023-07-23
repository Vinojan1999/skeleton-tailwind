import React, { useState } from "react";

const Preline = () => {
    const [isLoading, setIsLoading] = useState(true);
    setTimeout(() => {
        setIsLoading(false);
    }, 3000);

  return (
    <div>
      {isLoading ? (
        <div className="flex animate-pulse">
            <div className="flex-shrink-0">
            <span className="w-12 h-12 block bg-gray-200 rounded-full dark:bg-gray-700"></span>
            </div>
        
            <div className="ml-4 mt-2 w-full">
            <h3 className="h-4 bg-gray-200 rounded-md dark:bg-gray-700" style={{ width: "40%"}}></h3>
        
            <ul className="mt-5 space-y-3">
                <li className="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
                <li className="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
                <li className="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
                <li className="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700"></li>
            </ul>
            </div>
        </div>
      ) : (
        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <div className="p-4 md:p-5">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                Card title
                </h3>
                <p className="mt-2 text-gray-800 dark:text-gray-400">
                With supporting text below as a natural lead-in to additional content.
                </p>
                <a className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-blue-500 hover:text-blue-700" href="#">
                Card link
                <svg className="w-2.5 h-auto" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
                </a>
            </div>
        </div>
      )}
    </div>
  )
}

export default Preline